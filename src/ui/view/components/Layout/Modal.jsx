import { openModal } from "../../../assets/scripts/animations";

const Modal = {
  oncreate: () => {
    Array.from(document.querySelectorAll("button[id^=close-modal]")).forEach(button => {
      button.addEventListener('click', () => {
        openModal(false)
      })
    })
  },
  view: ({ attrs }) => (
    <div
      id="modal"
      class="absolute opacity-0 transform -translate-y-full scale-150  h-1/3 inset-1/4 inset-y-24 md:h-1/2 bg-white rounded shadow-lg transition-opacity transition-transform duration-300"
    >
      {/* Modal Tailwind Component originally by Huda Damar */}
      <button
        id="close-modal-x"
        class="absolute -top-3 -right-3 bg-red-500 hover:bg-red-600 text-2xl w-10 h-10 rounded-full focus:outline-none text-white"
      >
        X
      </button>

      <div class="px-4 py-3 border-b border-gray-200">
        <h2 class="text-xl font-semibold text-gray-600">Title</h2>
      </div>

      <div class="w-full p-3">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores,
        quis tempora! Similique, explicabo quaerat maxime corrupti tenetur
        blanditiis voluptas molestias totam? Quaerat laboriosam suscipit
        repellat aliquam blanditiis eum quos nihil.
      </div>

      <div class="absolute bottom-0 left-0 px-4 py-3 border-t border-gray-200 w-full flex justify-end items-center gap-3">
        <button class="bg-green-500 hover:bg-green-600 px-4 py-2 rounded text-white focus:outline-none">
          Save
        </button>
        <button id="close-modal"
          class="bg-red-500 hover:bg-red-600 px-4 py-2 rounded text-white focus:outline-none"
        >
          Close
        </button>
      </div>
    </div>
  ),
};

export default Modal;
