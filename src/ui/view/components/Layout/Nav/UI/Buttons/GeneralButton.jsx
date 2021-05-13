const GeneralButton = {
  view: ({ attrs }) => (
    <div
      className={`bg-${attrs.color} hover:bg-${attrs.color}lighter button-container general-button`}
    >
      <button
        id={attrs.id}
        name={attrs.name}
        data-id={attrs.dataAttr}
        type="button"
        className="flex-no-shrink text-balance-buttontext-neutral rounded-xl font-heavy flex items-center h-12 px-2 font-sans tracking-wide uppercase"
      >
        {attrs.label}
      </button>
    </div>
  ),
};

export default GeneralButton;
