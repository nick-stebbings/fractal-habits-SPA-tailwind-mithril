// src/view/components/Layout/FeatureCard.jsx

const FeatureCard = {
  oncreate: (vnode) => {
    vnode.dom.querySelector('button').addEventListener('click', () => {
      const contentContainer = vnode.dom.querySelector('.feature-card-content');
      const button = vnode.dom.querySelector('button');
      button.textContent = button.textContent == 'Hide' ? 'Find out more' : 'Hide';
      vnode.dom.querySelector('.long-content-wrapper')
        .classList.toggle('hidden');
      vnode.dom.querySelectorAll('p.long-content').forEach((paragraph) => {
        paragraph.classList.toggle('hidden');
      });
      document.querySelector('.feature-card-section').style.gridTemplateRows = 'repeat(17, minmax(100px, 300px))';

      const height = contentContainer.scrollHeight;
      const { maxHeight } = window.getComputedStyle(contentContainer);
      contentContainer.style.maxHeight = maxHeight !== '128px' ? `${height + 16}px` : '128px';
    });
  },
  view: (vnode) => (
    <div
      className={
        vnode.attrs.wide
          ? 'feature-card m-4 lg:m-8 wide relative flex flex-col items-end col-span-5 text-right shadow-lg bg-black'
          : 'feature-card m-4 lg:m-8 xl:wide relative flex flex-col items-end col-span-5 text-right shadow-lg bg-black'
      }
    >
      <h2 className="md:w-3/4 md:text-center relative z-10 self-end w-1/2 font-sans font-extrabold text-right">
        {vnode.attrs.title}
      </h2>
      <div className="feature-card-content lg:rounded-full md:feature-card-content-wide bg-balance-basic-black opacity-90 text-gray-50 z-20 mt-8 font-serif font-bold leading-10 tracking-wide">
        <h3 className="mb-4 text-xl font-light leading-8 tracking-wide">
          {vnode.attrs.shortContent}
        </h3>
        <div
          className="long-content-wrapper rounded-3xl md:p-6 md:pb-24 xl:px-8 xl:overflow-y-auto hidden p-4 font-serif tracking-tight text-left text-justify text-black bg-gray-100"
          style="max-height: 92%"
        >
          {vnode.attrs.longContent.map((paragraphText) => (
            <p className="long-content hidden">{m.trust(paragraphText)}</p>
          ))}
        </div>
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
