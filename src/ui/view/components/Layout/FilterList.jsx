import stream from "mithril/stream";

import HabitStore from "../../../store/habit-store.js";
import DomainStore from "../../../store/domain-store.js";

import GeneralButton from "../Layout/Nav/UI/Buttons/GeneralButton.jsx";
import { openModal } from "../../../assets/scripts/animations.js";

const currentInput = stream("");

const FilterList = function () {
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
          e.target.textContent = "Filter";
          currentInput("");
          m.redraw();
          HabitStore.indexHabitsOfDomain(HabitStore.current().domain_id);
          HabitStore.list(HabitStore.filterByName(currentInput()));
        });

      if (
        DomainStore.current()?.name !== "No Domains Registered" ||
        HabitStore.list().length == 0
      ) {
        HabitStore.indexHabitsOfDomain(DomainStore.current().id)
        if (HabitStore.list().length == 0) {
          // todo
        }
      }
    },
    view: ({ attrs }) => (
      <div class="mb-4">
        <h2 class="text-grey-darkest">
          Current Habits for {DomainStore.current().name}
        </h2>
        <div class="flex mt-4">
          <input
            name="filter-results"
            class="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
            placeholder="Type and press enter to filter"
            value={currentInput()}
          />
          <GeneralButton
            color="balance-buttonbg-reset"
            label="Filter"
            name="reset"
          />
        </div>
      </div>
    ),
  };
};

export default FilterList;
