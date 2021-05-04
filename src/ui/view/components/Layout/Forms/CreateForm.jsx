import HabitStore from "../../../../store/habit-store.js";
import HabitDateStore from "../../../../store/habit-date-store.js";
import DateStore from "../../../../store/date-store.js";
import NodeStore from "../../../../store/habit-node-store.js";
import DomainStore from "../../../../store/domain-store.js";

import { openModal } from "../../../../assets/scripts/animations";
import FormHeader from "./FormHeader.jsx";
import FormBody from "./FormBody.jsx";
import InputGroup from "./FormInputGroup.jsx";
import SubmitButton from "../Nav/UI/Buttons/SubmitButton.jsx";
import CancelButton from "../Nav/UI/Buttons/CancelButton.jsx";

const randId = String(Math.ceil(Math.random() * 100));

const processFormData = function (dom, attrs) {
  document
    .querySelector("form").addEventListener("submit", (e) => {
      e.preventDefault()
    });
  dom
    .querySelector("form button[type=submit]")
    .addEventListener("click", (e) => {
      let form = document.querySelector(`form#create-${attrs.resourceName}`);
      let inputs = [...form.querySelectorAll('input')];
      if (inputs.some(i => !i.validity.valid)) {
        inputs.forEach(i => {
          if (!i.validity.valid) {
            let label = i.previousElementSibling;
            label.classList.add('not-added');
          }
        });
        return;
      };
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
        .catch(() => {
          console.log("Could not submit data.");
          openModal(false);
        });

      DateStore.index()
        .then(() => {
          HabitStore.indexHabitsOfDomain(attrs.domain().id);
          NodeStore.clear();
          HabitDateStore.clear();
        })
        .catch(() => {
          console.log("Could not repopulate.");
          openModal(false);
        });
      
      attrs.modalType(false);
      m.route.set(m.route.get(), null);
    });
};

const CreateForm = {
  onupdate: () => {
    HabitStore.runCurrentFilterByNode(NodeStore.current().id);
  },
  oncreate: ({ attrs, dom }) => {
    if (m.route.param("demo")) return;

    document.querySelector(
      "input[name^=initiation-date]"
    ).value = new Date().toDateInputValue();

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
              name: `habit-title-${randId}`,
              label: "Habit Name",
              class: "reqd",
            },
            m("input[type=text]", {
              name: "name",
              id: `habit-title-${randId}`,
              class: "form-input",
              required: "true",
              maxlength: "50",
              placeholder: "e.g. Hydrate in the A.M.",
            })
          ),
          m(
            InputGroup,
            {
              name: `habit-description-${randId}`,
              label: "Habit Description",
            },
            m("input[type=text]", {
              name: "description",
              id: `habit-description-${randId}`,
              class: "form-input",
              maxlength: "80",
              placeholder: "e.g. Drinking water each day after waking",
            })
          ),
          m(
            InputGroup,
            {
              name: `initiation-date-${randId}`,
              label: "Initiation Date",
              class: "reqd",
            },
            m("input[type=date]", {
              id: `initiation-date-${randId}`,
              required: "true",
              name: "initiation-date",
              class: "form-input w-3/4 sm:w-2/3 md:w-1/2",
              max: String(DateStore.currentDate()),
              min: "2021-01-01",
            })
          ),
        ])}

        <div className="button-group py-3 mb-2 bg-white border-t border-gray-200">
          <CancelButton
            id={`close-modal-${randId}`}
            name="close"
            label="Forget It"
            modalType={attrs.modalType}
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
