
import NodeStore from "../../../store/habit-node-store";
import HabitStore from "../../../store/habit-store";
import HabitDateStore from "../../../store/habit-date-store";

import SubmitButton from "./Nav/UI/Buttons/SubmitButton.jsx";
import CancelButton from "./Nav/UI/Buttons/CancelButton.jsx";

const randId = String(Math.ceil(Math.random() * 100));

const Dialog = {
  oncreate: ({attrs}) => {
    const form = document.getElementById('form-dialog');
    form.addEventListener("submit", () => {
      if (attrs.type === 'habit-delete') {
        NodeStore.runDelete(NodeStore.current().id);
        NodeStore.clear();
        HabitStore.clear();
        HabitDateStore.clear();
        attrs.modalType(false);
        m.route.set("/habits/list");
      }
    })
  },
  view: ({ attrs }) => (
    <div class="flex items-center m-4 sm:m-8">
      <div class="form-header flex flex-shrink-0 justify-center items-center w-14 h-14 font-mono rounded-full bg-balance-tershades-gray">
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class={attrs.iconColor}
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d={attrs.iconPath}
          />
        </svg> */}
      </div>
      <form id="form-dialog">
        <div class="block self-start pl-2 text-xl font-semibold text-gray-700">
          <h2 class="leading-relaxed">{attrs.title}</h2>
          <p class="text-sm font-normal leading-relaxed text-gray-500">
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
