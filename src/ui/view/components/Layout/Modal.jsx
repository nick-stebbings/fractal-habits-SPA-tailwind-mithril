import { openModal } from '../../../assets/scripts/animations';
import CreateForm from '../Pages/Forms/CreateForm.jsx';

import DomainStore from '../../../store/domain-store';

const Modal = {
  oncreate: () => {
    Array.from(document.querySelectorAll('button[id^=close-modal]')).forEach(
      (button) => {
        button.addEventListener('click', () => {
          openModal(false);
        });
      },
    );
  },
  view: () => (
    <div
      id="modal_overlay"
      className="bg-opacity-30 md:items-center fixed z-50 flex items-start justify-center hidden w-full h-full overflow-auto bg-black"
    >
      {/* Modal Tailwind Component originally by Huda Damar */}
      <div
        id="modal"
        className="inset-4 sm:inset-12 rounded-2xl absolute bottom-auto flex transition-opacity transition-transform duration-300 transform scale-150 -translate-y-full bg-white shadow-lg opacity-0"
      >
        <button
          id="close-modal-x"
          type="button"
          className="-top-3 -right-3 hover:bg-red-600 focus:outline-none absolute w-10 h-10 text-2xl text-white bg-red-500 rounded-full"
        >
          <svg
            className="w-6 h-6 mx-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="rounded-2xl flex flex-col items-center w-full">
          <div className="px-4 py-3 border-b border-gray-200">
            <h2 className="mt-2 text-xl font-semibold text-center text-gray-600">
              Create a new habit under the life domain
            </h2>
            <h3 className="mt-2 text-2xl font-bold text-center">
              { m('span', DomainStore.current() ? DomainStore.current().name : 'Placeholder') }
            </h3>
          </div>
          <CreateForm
            resourceName="Habit"
            domain={DomainStore.current}
            resourceDescription="A way of keeping track of your daily behaviours"
          />
        </div>
      </div>
    </div>
  ),
};

export default Modal;
