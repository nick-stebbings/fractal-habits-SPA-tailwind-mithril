const MainStage = {
  view: ({ attrs, children }) => (
    <main className={attrs.isIndex ? 'lg:top-24 md:top-12 wrapper justify-items-center gap-x-1 gap-y-3 bg-gray-50 grid grid-cols-5' : 'lg:pt-46 lg:top-24 md:top-12 wrapper bg-gray-50'}>
      {attrs.isIndex
        ? children
        : m('section.cards.flex-1.bg-gray-50 h-full', [children[0]])}
    </main>
  ),
};

export default MainStage;
