const ResetButton = {
  view: ({ attrs }) => (
    <div className="bg-balance-buttonbg-neutral rounded-xl border-balance-tershades-dark hover:border-balance-sshades-sat hover:bg-balance-pshades-dark flex items-center justify-between px-1 mx-2 border-2 shadow-md">
      <button className="flex-no-shrink text-balance-buttontext-neutral rounded-xl font-heavy flex items-center h-12 px-2 font-sans tracking-wide uppercase">
        {attrs.label}
      </button>
    </div>
  ),
};

export default ResetButton;
