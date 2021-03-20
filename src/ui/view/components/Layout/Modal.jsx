import { openModal } from "../../../assets/scripts/animations";
import CreateForm from "../pages/forms/CreateForm.jsx"

import DomainStore from "../../../store/domain-store";
import NodeStore from "../../../store/habit-node-store";

const Modal = {
  oncreate: () => {
    Array.from(document.querySelectorAll("button[id^=close-modal]")).forEach(
      (button) => {
        button.addEventListener("click", () => {
          openModal(false);
        });
      }
    );
  },
  view: ({ attrs }) => (
    <div
      id="modal_overlay"
      class="fixed overflow-auto hidden z-50 bg-black bg-opacity-30 w-full h-full flex justify-center items-start md:items-center"
    >
      {/* Modal Tailwind Component originally by Huda Damar */}
      <div
        id="modal"
        class="flex absolute opacity-0 transform -translate-y-full scale-150 inset-4 sm:inset-12 md:inset-1/4 rounded-2xl bg-white shadow-lg transition-opacity transition-transform duration-300 bottom-auto"
      >
        <button
          id="close-modal-x"
          class="absolute -top-3 -right-3 bg-red-500 hover:bg-red-600 text-2xl w-10 h-10 rounded-2xl focus:outline-none text-white"
        >
          <svg
            class="w-6 h-6 mx-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="3"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>

        <div class="flex flex-col items-center w-full rounded-2xl">
          <div class="px-4 py-3 border-b border-gray-200">
            <h2 class="text-xl font-semibold text-gray-600 mt-2 text-center">
              Create a new habit under the life domain
            </h2>
            <h3 class="text-2xl font-bold text-center mt-2">
              {DomainStore.current().name || "Waiting"}
            </h3>
          </div>
          <CreateForm
            resourceName="Habit"
            resourceDescription="A way of keeping track of your daily behaviours"
          ></CreateForm>
        </div>
      </div>
    </div>
  ),
};

export default Modal;
