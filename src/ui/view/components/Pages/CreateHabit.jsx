import HabitStore from '../../../store/habit-store.js';
import NodeStore from '../../../store/habit-node-store.js';

import CreateForm from './Forms/CreateForm.jsx';
import HabitNodeList from './HabitNodeList.jsx';

const CreateHabit = function () {
  HabitStore.index();
  NodeStore.index();

  return {
    oninit: () => {
      HabitStore.index().then(() => m.redraw());
    },
    view: () => m('div#habit-create-form', { class: 'flex justify-between' }, [
      m(CreateForm, { resourceName: 'Habit', domain: null, resourceDescription: 'A way of keeping track of your daily behaviours' }),
      m(HabitNodeList),
    ]),
  };
};

export default CreateHabit;
