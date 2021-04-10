import stream from "mithril/stream";

import HabitStore from "../../../store/habit-store.js";
import DomainStore from "../../../store/domain-store.js";

import ListCard from "./Nav/UI/ListCard.jsx";
import GeneralButton from "../Layout/Nav/UI/Buttons/GeneralButton.jsx";

const currentInput = stream("");

const HabitFilterList = function () {
  return {
    oncreate: () => {
      const filterInput = document.querySelector("input[name=filter-results]");

      filterInput.addEventListener("change", (e) => {
        currentInput(e.target.value);
        if (currentInput() == "") {
          return;
        }
        m.redraw();
        HabitStore.indexHabitsOfDomain(HabitStore.current().domain_id);
        HabitStore.list(HabitStore.filterByName(currentInput()));
      });

      document
        .querySelector("button[name=reset]")
        .addEventListener("click", (e) => {
          console.log("fired click");
          currentInput("");
          m.redraw();
          HabitStore.indexHabitsOfDomain(HabitStore.current().domain_id);
          HabitStore.list(HabitStore.filterByName(currentInput()));
        });
    },
    view: () => (
      <div class="p-6">
        {/* Tailwind TodoList Component originally by nickjbasile */}
        <div class="mb-4">
          <h2 class="text-grey-darkest">Current Habits for </h2>
          <div class="flex mt-4">
            <input
              name="filter-results"
              class="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
              placeholder="Type and press enter to filter"
              value={currentInput()}
            />
            <GeneralButton
              color="balance-buttonbg-reset"
              label="Clear"
              name="reset"
            />
          </div>
        </div>
        {m(
          "div#habit-list",
          HabitStore.list().map((habit) => m(ListCard, { value: habit }))
        )}
      </div>
    ),
  };
};

export default HabitFilterList;
