const ResetButton = {
  view: ({ attrs }) => (
    <div className="bg-balance-buttonbg-submit rounded-xl border-balance-sshades-dark hover:border-balance-pshades-gray hover:bg-balance-sshades-light flex items-center justify-between px-1 mx-2 border-2 shadow-md">
      <button
        id={attrs.id}
        name={attrs.name}
        className="flex-no-shrink text-balance-buttontext-neutral focus:outline-light rounded-xl font-heavy flex items-center h-12 px-2 font-sans tracking-wide uppercase"
      >
        {attrs.label}
      </button>
    </div>
  ),
};

export default ResetButton;
