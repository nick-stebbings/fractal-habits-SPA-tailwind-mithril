import DomainStore from '../../../store/domain-store.js';
import HabitStore from '../../../store/habit-store.js';

import ListCard from '../layout/ListCard.jsx';

const HabitNodeList = function () {
  // DomainStore.indexHabitsOf(DomainStore.current().id).then(() => {
  //   m.redraw();
  // });

  return {
    view: () => m('div#habit-list', HabitStore.list().map((habit) => m(ListCard, { value: habit }))),
  };
};

export default HabitNodeList;
