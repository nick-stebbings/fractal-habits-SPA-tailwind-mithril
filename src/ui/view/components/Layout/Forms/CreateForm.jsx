import HabitStore from "../../../../store/habit-store.js";
import DateStore from "../../../../store/date-store.js";

import { openModal } from "../../../../assets/scripts/animations";
import FormHeader from "./FormHeader.jsx";
import FormBody from "./FormBody.jsx";
import InputGroup from "./FormInputGroup.jsx";
import SubmitButton from "../Nav/UI/Buttons/SubmitButton.jsx";
import CancelButton from "../Nav/UI/Buttons/CancelButton.jsx";
import DomainStore from "../../../../store/domain-store.js";

let maxDate;
const processFormData = function (dom, attrs) {
  dom
    .querySelector("form button[type=submit]")
    .addEventListener("click", (e) => {
      e.preventDefault();
      let form = document.querySelector(`form#create-${attrs.resourceName}`);

      const data = {};
      const FD = new FormData(form);

      FD.forEach((value, key) => {
        data[key.replace(/-/g, "_")] = value;
      }); // Assign values while swapping for snake_case
      data.domain_id = attrs.domain().id;
      data.parent_node_id =
        attrs.resourceName === "new-habit-child"
          ? HabitStore.current().id
          : null;

      DateStore.submit({ h_date: data.initiation_date })
        .then(() => HabitStore.submit(data))
        .then(() => {
          openModal(false);
        })
        .then(DateStore.index)
        .then(() => {
          HabitStore.indexHabitsOfDomain(data.domain_id);
        })
        .then(m.redraw())
        .catch(() => {
          console.log("Could not submit data.");
          openModal(false);
        });
      form.reset();
    });
};

const CreateForm = {
  oncreate: ({ attrs, dom }) => {
    if (m.route.param("demo")) return;

    document.querySelector(
      "input[name^=initiation-date]"
    ).value = new Date().toDateInputValue();

    maxDate = String(DateStore.currentDate());

    processFormData(dom, attrs);
  },
  view: ({ attrs }) => {
    return m.route.param("demo") ? (
      m("div.my-2.mx-2", "No Habit creation in Demo mode!")
    ) : (
      <form id={`create-${attrs.resourceName}`}>
        {attrs.addHeader && (
          <FormHeader
            iconPath="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            title={`Create a ${attrs.resourceName}`}
            domain={DomainStore.current}
          />
        )}

        {m(FormBody, [
          m(
            InputGroup,
            {
              name: "habit-name",
              label: "Habit Name",
            },
            m("input[type=text]", {
              name: "name",
              id: `habit-title-${String(Math.ceil(Math.random() * 100))}`,
              class: "form-input",
              placeholder: "e.g. Hydrate in the A.M.",
            })
          ),
          m(
            InputGroup,
            {
              name: "habit-description",
              label: "Habit Description",
            },
            m("input[type=text]", {
              name: "description",
              id: `habit-description-${String(Math.ceil(Math.random() * 100))}`,
              class: "form-input",
              placeholder: "e.g. Drinking water each day after waking",
            })
          ),
          m(
            InputGroup,
            {
              name: "initiation_date",
              label: "Initiation Date",
            },
            m("input[type=date]", {
              id: `initiation-date-${String(Math.ceil(Math.random() * 100))}`,
              name: "initiation-date",
              class: "form-input w-3/4 sm:w-2/3 md:w-1/2",
              max: maxDate,
            })
          ),
        ])}

        <div className="button-group py-3 mb-2 bg-white border-t border-gray-200">
          <CancelButton
            id={`close-modal-${String(Math.ceil(Math.random() * 100))}`}
            name="close"
            label="Forget It"
            formNeeded={attrs.formNeeded}
          />
          <SubmitButton
            id={`submit-form-${String(Math.ceil(Math.random() * 100))}`}
            name="submit"
            label="Start Tracking"
          />
        </div>
      </form>
    );
  },
};

export default CreateForm;
