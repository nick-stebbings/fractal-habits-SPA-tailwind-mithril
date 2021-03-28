import HabitStore from '../../../store/habit-store.js';

import ListCard from '../layout/ListCard.jsx';

const HabitNodeList = function () {
  return {
    view: () => m('div#habit-list', HabitStore.list().map((habit) => m(ListCard, { value: habit }))),
  };
};

export default HabitNodeList;
