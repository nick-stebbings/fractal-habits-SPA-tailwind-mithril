import NodeStore from '../../../store/habit-node-store';
import HabitStore from '../../../store/habit-store';
import HabitDateStore from '../../../store/habit-date-store';

import SubmitButton from './Nav/UI/Buttons/SubmitButton.jsx';
import CancelButton from './Nav/UI/Buttons/CancelButton.jsx';

const randId = String(Math.ceil(Math.random() * 100));

const Dialog = {
  oncreate: ({ attrs }) => {
    const form = document.getElementById('form-dialog');
    form.addEventListener('submit', () => {
      if (attrs.type === 'habit-delete') {
        NodeStore.runDelete(NodeStore.current().id);
        console.log('Deleted');
        NodeStore.clear();
        HabitStore.clear();
        HabitDateStore.clear();
        attrs.modalType(false);
        m.route.set('/habits/list', null);
      }
    });
  },
  view: ({ attrs }) => (
    <div className="sm:m-8 flex items-center m-4">
      <div className="form-header w-14 h-14 bg-balance-tershades-gray flex items-center justify-center flex-shrink-0 font-mono rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className={attrs.iconColor}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={attrs.iconPath}
          />
        </svg>
      </div>
      <form id="form-dialog" className="p-0">
        <div className="self-start block pl-2 text-xl font-semibold text-gray-700">
          <h2 className="leading-relaxed">{attrs.title}</h2>
          <p className="text-sm font-normal leading-relaxed text-gray-500">
            {attrs.message}
          </p>
        </div>
        <div className="button-group py-3 mb-2 mr-4 text-sm bg-white border-t border-gray-200">
          <CancelButton
            id={`close-modal-${randId}`}
            name="close"
            label="Forget It"
            modalType={attrs.modalType}
          />
          <SubmitButton
            id={`submit-form-${randId}`}
            name="submit"
            label="Confirm"
          />
        </div>
      </form>
    </div>
  ),
};

export default Dialog;
