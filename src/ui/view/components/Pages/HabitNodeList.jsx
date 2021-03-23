import NodeStore from '../../../store/habit-node-store.js';

import ListCard from '../layout/ListCard.jsx';

const HabitNodeList = function () {
  NodeStore.list(['Waiting']);

  return {
    oninit: () => {
      NodeStore.index().then(() => m.redraw());
    },
    view: () => NodeStore.list().map((n) => m(ListCard, { value: n })),
  };
};

export default HabitNodeList;
