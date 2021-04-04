import DomainStore from "../../../store/domain-store";

import CreateForm from "../Pages/Forms/CreateForm.jsx";

const Modal = {
  view: ({ attrs }) => (
    <div
      id="modal_overlay"
      className="bg-opacity-30 md:items-center fixed z-50 flex items-start justify-center w-full h-full overflow-auto bg-black"
    >
      {/* Modal Tailwind Component originally by Huda Damar */}
      {/* Spinner Component originally by Astro_Corp */}
      {attrs.spinnerNeeded() ? (
        <div class="loader"></div>
      ) : (
        <div
          id="modal"
          className="inset-4 sm:inset-12 rounded-2xl shadow-tershades-gray absolute bottom-auto flex transition-opacity transition-transform duration-300 transform scale-150 -translate-y-full bg-white opacity-0"
        >
          <button
            id="close-modal-x"
            type="button"
            className="-top-3 -right-3 hover:bg-balance-buttonbg-closelighter bg-balance-buttonbg-close focus:outline-none absolute w-10 h-10 text-2xl text-white bg-red-500 rounded-full"
          >
            <svg
              className="w-6 h-6 mx-auto"
              fill="none"
              id="close-modal-x-svg"
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
                {m(
                  "span",
                  DomainStore.current() ? DomainStore.current().name : ""
                )}
              </h3>
            </div>
            <CreateForm
              addHeader={false}
              resourceName="Habit"
              domain={DomainStore.current}
              resourceDescription="A way of keeping track of your daily behaviours"
            />
          </div>
        </div>
      )}
    </div>
  ),
};

export default Modal;
