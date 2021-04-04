import HabitStore from "../../../store/habit-store.js";

import ListCard from "../Layout/ListCard.jsx";
import GeneralButton from "../Layout/Nav/GeneralButton.jsx";

const HabitList = function () {
  return {
    oncreate: ({ dom }) => {
      const filterInput = dom.querySelector("input[name=filter-results]");
      dom.querySelector("button[name=reset]").addEventListener("click", (e) => {
        filterInput.value = "";
        HabitStore.list(HabitStore.filterByName(""));
        m.redraw();
      });
      filterInput.addEventListener("input", (e) => {
        HabitStore.list(HabitStore.filterByName(e.target.value));
        m.redraw();
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
              placeholder="Filter results"
            />
            <GeneralButton label="Clear" name="reset" />
          </div>
        </div>
        {m(
          "div#habit-list",
          HabitStore.list().map((habit, idx) => m(ListCard, { value: habit }))
        )}
      </div>
    ),
  };
};

export default HabitList;
