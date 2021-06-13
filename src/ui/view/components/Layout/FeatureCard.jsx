// src/view/components/Layout/FeatureCard.jsx

const FeatureCard = {
  oncreate: (vnode) => {
    vnode.dom.querySelector('button').addEventListener('click', () => {
      const contentContainer = vnode.dom.querySelector('.feature-card-content');
      const button = vnode.dom.querySelector('button');
      button.textContent = button.textContent == 'Hide' ? 'Find out more' : 'Hide';
      vnode.dom.querySelectorAll('p.long-content').forEach((paragraph) => {
        paragraph.classList.toggle('hidden');
      });
      document.querySelector('.feature-card-section').style.gridTemplateRows = 'repeat(17, minmax(100px, 200px))';

      const height = contentContainer.scrollHeight;
      const { maxHeight } = window.getComputedStyle(contentContainer);
      contentContainer.style.maxHeight = maxHeight !== '128px' ? `${height + 16}px` : '128px';
    });
  },
  view: (vnode) => (
    <div
      className={
        vnode.attrs.wide
          ? 'feature-card mb-4 wide relative flex flex-col items-end col-span-5 text-right shadow-lg'
          : 'feature-card mb-4 xl:wide relative flex flex-col items-end col-span-5 text-right shadow-lg'
      }
    >
      <h2 className="font-std md:w-3/4 md:text-center relative z-10 self-end w-1/2 font-extrabold text-right">
        {vnode.attrs.title}
      </h2>
      <div className="feature-card-content lg:rounded-full md:feature-card-content-wide bg-balance-basic-black opacity-90 z-20 mt-8 font-serif font-bold leading-10 tracking-wide text-white">
        <p>{vnode.attrs.shortContent}</p>
        {vnode.attrs.longContent.map((paragraphText) => (
          <p className="long-content hidden">{paragraphText}</p>
        ))}
        <button
          type="button"
          className="xl:feature-card-content-wide-button button font-std hover:bg-balance-basic-digblue rounded-l-2xl rounded-b-2xl -bottom-1 absolute right-0 px-4 py-1 font-semibold tracking-widest uppercase"
        >
          Find Out More
        </button>
      </div>
    </div>
  ),
};

export default FeatureCard;
