const MainStage = {
  view: ({ attrs, children }) => (
    <main className={attrs.isIndex ? 'lg:top-24 md:top-12 wrapper justify-items-center gap-x-1 gap-y-2 md:gap-y-8 bg-gray-50 lg:pt-16 grid grid-cols-5' : 'lg:top-24 md:top-12 wrapper bg-gray-50 lg:pt-16'}>
      {attrs.isIndex
        ? children
        : m('section.cards.flex-1.bg-gray-50 h-full', [children[0]])}
    </main>
  ),
};

export default MainStage;
