import DomainStore from '../../../store/domain-store.js';

import CreateForm from './Forms/CreateForm.jsx';
import HabitList from './HabitList.jsx';

const CreateHabit = {
  view: () => m('div#habit-create-form', [
    m('div', m('h2', 'Choose a habit to be the parent', m(HabitList))),
    m(CreateForm, { addHeader: false, resourceName: 'HabitChild', domain: DomainStore.current }),
  ]),
};

export default CreateHabit;
