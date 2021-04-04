const CancelButton = {
  view: ({ attrs }) => (
    <div className="bg-balance-buttonbg-close hover:bg-balance-buttonbg-closelighter flex items-center justify-between px-1 mr-1 border-2 rounded-full shadow-md">
      <button
        id={attrs.id}
        id={attrs.name}
        type="submit"
        value="submit"
        disabled={attrs.disabled}
        className={
          attrs.class
            ? `${attrs.class} flex-no-shrink rounded-full text-balance-buttontext-neutral font-heavy flex items-center h-12 px-2 font-sans tracking-wide uppercase`
            : "flex-no-shrink text-balance-buttontext-neutral font-heavy flex items-center h-12 px-2 font-sans tracking-wide uppercase"
        }
      >
        {attrs.label}
      </button>
    </div>
  ),
};

export default CancelButton;
