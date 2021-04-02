import HabitStore from '../../../../store/habit-store.js';
import DateStore from '../../../../store/date-store.js';

import { openModal } from '../../../../assets/scripts/animations';
import FormHeader from './FormHeader.jsx';
import FormBody from './FormBody.jsx';
import InputGroup from './FormInputGroup.jsx';

let maxDate;

const CreateForm = {
  oncreate: ({ attrs }) => {
    document.getElementById(
      "initiation-date"
    ).value = new Date().toDateInputValue();
    maxDate = String(DateStore.currentDate());

    document.querySelector("form").addEventListener("submit", (e) => {
      e.preventDefault();

      const data = {};
      const FD = new FormData(e.target);

      FD.forEach((value, key) => {
        data[key.replace(/-/g, "_")] = value;
      }); // Assign values while swapping for snake_case
      data.domain_id = attrs.domain().id;
      data.habit_node_id = 1;
      data.parent_node_id = null;

      DateStore.submit({ h_date: data.initiation_date })
        .then(() => HabitStore.submit(data))
        .then(() => {
          openModal(false);
        })
        .then(DateStore.index)
        .then(indexHabitsOfDomain)
        .then(() => m.redraw())
        .catch(() => {
          openModal(false);
        });
    });
  },
  view: ({ attrs }) => (
    <form id={`create-${attrs.resourceName}`} action="" method="">
      {attrs.addHeader && (
        <FormHeader
          iconPath="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          title={`Create a ${attrs.resourceName}`}
          description={attrs.resourceDescription}
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
            id: "habit-title",
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
            id: "habit-description",
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
            id: "initiation-date",
            name: "initiation-date",
            class: "form-input w-3/4 sm:w-2/3 md:w-1/2",
            list: maxDate,
          })
        ),
      ])}

      <div className="button-container px-4 py-3 bg-white border-t border-gray-200">
        <button
          name="close-modal"
          type="button"
          id="close-modal"
          className="hover:bg-red-600 focus:outline-none px-4 py-2 text-white bg-red-500 rounded"
        >
          Forget It
        </button>
        <button
          disabled={m.route.param("demo") ? true : false}
          className={m.route.param("demo") && 'not-available'}
          name="submit"
          value="submit"
          type="submit"
        >
          Start Tracking
        </button>
      </div>
    </form>
  ),
};

export default CreateForm;
