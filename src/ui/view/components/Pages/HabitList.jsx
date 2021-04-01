import DomainStore from '../../../store/domain-store.js';
import HabitStore from '../../../store/habit-store.js';

import ListCard from '../layout/ListCard.jsx';

const HabitList = function () {
  return {
    view: () => (
      <div class="p-6">
          {/* Tailwind TodoList Component originally by nickjbasile */}
          <div class="mb-4">
            <h2 class="text-grey-darkest">
              Current Habits for{" "}
            </h2>
            <div class="flex mt-4">
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
                placeholder="Filter results"
              />
              <button class="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal">
                Filter
              </button>
              <button class="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal">
                Clear
              </button>
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

export default HabitList;
