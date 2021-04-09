import HabitStore from "../../../store/habit-store.js";
import DomainStore from "../../../store/domain-store.js";

import ListCard from "./Nav/UI/ListCard.jsx";
import GeneralButton from "../Layout/Nav/UI/Buttons/GeneralButton.jsx";

const HabitFilterList = function () {
  let lastValue;

  return {
    oncreate: ({ dom }) => {
      const filterInput = dom.querySelector("input[name=filter-results]");
      dom.querySelector("button[name=reset]").addEventListener("click", (e) => {
        filterInput.value = "";
        HabitStore.list(HabitStore.indexHabitsOfDomain(DomainStore.current()));
        m.redraw();
      });
      filterInput.addEventListener("input", (e) => {
        lastValue = e.target.Value;
        HabitStore.list(HabitStore.filterByName(e.target.value));
        m.redraw();
      });
    },
    onupdate: ({ dom }) => {
      document.querySelector("input[name=filter-results]").value = lastValue;
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
              placeholder="Filter results"
            />
            <GeneralButton label="Clear" name="reset" />
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
