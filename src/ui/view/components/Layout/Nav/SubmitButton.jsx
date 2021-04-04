const SubmitButton = {
  view: ({ attrs }) => (
    <div
      name={attrs.name}
      className={
        !!attrs.class
          ? `${attrs.class} bg-balance-buttonbg-success hover:bg-balance-buttonbg-successlighter flex items-center justify-between px-1 mr-1 border-2 rounded-full shadow-md`
          : "bg-balance-buttonbg-success hover:bg-balance-buttonbg-successlighter flex items-center justify-between px-1 mr-1 border-2 rounded-full shadow-md"
      }
    >
      <button
        id={attrs.id}
        type="submit"
        value="submit"
        disabled={attrs.disabled}
        className={
          "flex-no-shrink text-balance-buttontext-neutral font-heavy flex items-center h-8 px-2 my-1 font-sans tracking-wide uppercase"
        }
      >
        {attrs.label}
      </button>
    </div>
  ),
};

export default SubmitButton;
