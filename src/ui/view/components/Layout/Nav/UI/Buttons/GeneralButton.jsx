const ResetButton = {
  view: ({ attrs }) => (
    <div
      className={
        attrs.color
          ? `${attrs.color} button-container general-button`
          : "bg-balance-buttonbg-neutral button-container general-button"
      }
    >
      <button
        id={attrs.id}
        name={attrs.name}
        className="flex-no-shrink text-balance-buttontext-neutral rounded-xl font-heavy flex items-center h-12 px-2 font-sans tracking-wide uppercase"
      >
        {attrs.label}
      </button>
    </div>
  ),
};

export default ResetButton;
