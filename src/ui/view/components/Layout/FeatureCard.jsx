// src/view/components/Layout/FeatureCard.jsx

const FeatureCard = {
  view: (vnode) => (
    <div
      className={
        vnode.attrs.wide
          ? 'feature-card wide relative flex flex-col items-end col-span-5 text-right shadow-lg'
          : 'feature-card xl:wide relative flex flex-col items-end col-span-5 text-right shadow-lg'
      }
    >
      <h2 className="font-std md:w-3/4 md:text-center relative z-10 self-end w-1/2 font-extrabold text-right">
        {vnode.attrs.title}
      </h2>
      <div className="feature-card-content bg-balance-basic-black opacity-90 z-20 mt-8 font-serif font-bold leading-10 tracking-wide text-white">
        <p className="mb-4">{vnode.attrs.shortContent}</p>
        {vnode.attrs.longContent.map((paragraphText) => (
          <p className="long-content hidden mb-4">
            {paragraphText}
          </p>
        ))}
        <button
          type="button"
          onClick={function () {
            const contentContainer = vnode.dom.querySelector(
              '.feature-card-content',
            );
            const button = vnode.dom.querySelector('button');
            button.textContent = button.textContent == 'Hide' ? 'Find out more' : 'Hide';
            vnode.dom
              .querySelectorAll('p.long-content')
              .forEach((paragraph) => {
                debugger;
                paragraph.classNameList.toggle('hidden');
              });
            const height = contentContainer.scrollHeight;
            const { maxHeight } = window.getComputedStyle(contentContainer);
            contentContainer.style.maxHeight = maxHeight !== '128px' ? `${height + 16}px` : '128px';
          }}
          className="button font-std hover:bg-balance-basic-digblue rounded-l-2xl rounded-b-2xl bottom-12 absolute px-4 py-1 font-semibold tracking-widest uppercase"
        >
          Find Out More
        </button>
      </div>
    </div>
  ),
};

export default FeatureCard;
