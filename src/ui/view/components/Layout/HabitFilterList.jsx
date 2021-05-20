import HabitStore from '../../../store/habit-store.js';

import FilterList from './FilterList.jsx';
import ListCard from './Nav/UI/ListCard.jsx';

const HabitFilterList = function () {
  return {
    view: () => (
      <div className="p-6">
        {/* Tailwind TodoList Component originally by nickjbasile */}
        {m(FilterList)}
        {m(
          'div#habit-list',
          HabitStore.list().map((habit) => m(ListCard, { value: habit })),
        )}
      </div>
    ),
  };
};

export default HabitFilterList;
