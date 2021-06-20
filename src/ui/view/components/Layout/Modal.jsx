import DomainStore from '../../../store/domain-store';

import CreateForm from './Forms/CreateForm.jsx';
import Dialog from './DialogBox.jsx';

const Modal = {
  view: ({ attrs }) => (
    <div
      id="modal_overlay"
      className="bg-opacity-30 md:items-center fixed z-50 flex items-start justify-center w-full h-full bg-black"
    >
      {/* Modal Tailwind Component originally by Huda Damar */}
      {/* Spinner Component originally by Astro_Corp */}
      {attrs.spinnerNeeded() ? (
        <div className="loader" />
      ) : (
        <div
          id="modal"
          className={
            attrs.modalType() === 'confirm'
              ? 'h-72 inset-y-1/3 inset-x-10 sm:inset-1/4 rounded-2xl shadow-tershades-gray absolute flex transition-opacity transition-transform duration-300 transform scale-150 -translate-y-full bg-white opacity-0'
              : 'h-5/6 inset-4 sm:inset-12 rounded-2xl shadow-tershades-gray absolute bottom-auto flex transition-opacity transition-transform duration-300 transform scale-150 -translate-y-full bg-white opacity-0'
          }
        >
          <div className="rounded-2xl flex flex-col items-center w-full">
            <div className="px-4 py-3 border-b border-gray-200">
              <h2 className="mt-2 text-xl font-semibold text-center text-gray-600">
                {attrs.modalType() === 'confirm'
                  ? 'Message: You are about to...'
                  : 'Create a new habit under the life domain'}
              </h2>
              <h3 className="mt-2 text-2xl font-bold text-center">
                {attrs.modalType() !== 'confirm'
                  && m('span', DomainStore.current().name)}
              </h3>
            </div>
            {attrs.modalType() && attrs.modalType() !== 'confirm' && (
              <CreateForm
                addHeader={false}
                resourceName={
                  typeof attrs.modalType() === 'string'
                  && attrs.modalType().includes('d3vis')
                    ? 'new-habit-child'
                    : 'Habit'
                }
                domain={DomainStore.current}
                resourceDescription="A way of keeping track of your daily behaviours"
                modalType={attrs.modalType}
              />
            )}
            {attrs.modalType() === 'confirm' && (
              <Dialog
                type="habit-delete"
                title="Delete Habit and all Child Habits"
                message="Are you sure?"
                modalType={attrs.modalType}
                iconColor="#e3922f"
                iconPath="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            )}
          </div>
        </div>
      )}
    </div>
  ),
};

export default Modal;
