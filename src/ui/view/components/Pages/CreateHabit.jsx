import HabitStore from '../../../store/habit-store.js';

import CreateForm from './Forms/CreateForm.jsx';
import HabitList from './HabitList.jsx';

const CreateHabit = function () {
  return {
    view: () => m('div#habit-create-form', { class: 'flex justify-between' }, [
      m(HabitList),
      m(CreateForm, { resourceName: 'Habit', domain: null, resourceDescription: 'A way of keeping track of your daily behaviours' }),
    ]),
  };
};

export default CreateHabit;
