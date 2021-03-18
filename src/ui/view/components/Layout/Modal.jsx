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
      class="absolute hidden inset-0 z-50 bg-black bg-opacity-30 h-screen w-full flex justify-center items-start md:items-center pt-10 md:pt-0"
    >
      {/* Modal Tailwind Component originally by Huda Damar */}
      <div
        id="modal"
        class="flex absolute opacity-0 transform -translate-y-full scale-150 inset-x-12 md:inset-x-1/4 rounded-2xl inset-y-8 md:inset-y-24 bg-white rounded shadow-lg transition-opacity transition-transform duration-300"
      >
        <button
          id="close-modal-x"
          class="absolute -top-3 -right-3 bg-red-500 hover:bg-red-600 text-2xl w-10 h-10 rounded-full focus:outline-none text-white"
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

        <div class="overflow-y-scroll flex flex-col items-center w-full">
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
          <div class="px-4 py-3 border-t border-gray-200 w-full flex justify-end items-center gap-3">
            <button class="bg-green-500 hover:bg-green-600 px-4 py-2 rounded text-white focus:outline-none">
              Start Tracking
            </button>
            <button
              id="close-modal"
              class="bg-red-500 hover:bg-red-600 px-4 py-2 rounded text-white focus:outline-none"
            >
              Forget It
            </button>
          </div>
        </div>
      </div>
    </div>
  ),
};

export default Modal;
