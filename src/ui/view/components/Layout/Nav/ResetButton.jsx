const ResetButton = {
  view: ({ attrs }) => (
    <div className="bg-balance-buttonbg-neutral rounded-2xl border-balance-buttonbg-success hover:bg-balance-pshades-dark flex items-center justify-between px-1 mx-2 border-2 shadow-md">
      <button className="flex-no-shrink text-balance-buttontext-neutral font-heavy flex items-center h-12 px-2 font-sans text-xl tracking-wide uppercase">
        {attrs.label}
      </button>
    </div>
  ),
};

export default ResetButton;
