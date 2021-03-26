import DomainStore from '../../../store/domain-store.js';
import HabitStore from '../../../store/habit-store.js';

import ListCard from '../layout/ListCard.jsx';

const HabitNodeList = function () {
  DomainStore.indexHabitsOf(9).then(() => {
  });

  return {
    view: () => m('div#habit-list', HabitStore.list().map((habit) => m(ListCard, { value: habit }))),
  };
};

export default HabitNodeList;
