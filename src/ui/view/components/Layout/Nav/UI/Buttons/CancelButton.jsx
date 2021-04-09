import { openModal } from "../../../../../../assets/scripts/animations";

const CancelButton = {
  oncreate: ({ attrs, dom }) => {
    dom.addEventListener("click", () => {
      openModal(false);
      attrs.formNeeded(false);
    });
  },
  view: ({ attrs }) => (
    <div className="button-container cancel-button">
      <button
        id={attrs.id}
        name={attrs.name}
        disabled={attrs.disabled}
        className={
          !!attrs.class
            ? `${attrs.class} flex-no-shrink rounded-full text-balance-buttontext-neutral font-heavy flex items-center h-8 px-2 my-1 font-sans tracking-wide uppercase`
            : "flex-no-shrink text-balance-buttontext-neutral font-heavy flex items-center h-8 px-2 my-1 font-sans tracking-wide uppercase"
        }
      >
        {attrs.label}
      </button>
    </div>
  ),
};

export default CancelButton;
