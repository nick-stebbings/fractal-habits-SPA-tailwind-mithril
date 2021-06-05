const MainStage = {
  view: ({ attrs, children }) => (
    <main className="lg:top-24 md:top-12 wrapper justify-items-center gap-x-1 gap-y-8 bg-gray-50 lg:pt-16 grid grid-cols-5">
      {attrs.isIndex
        ? children
        : m('section.cards.flex-1.bg-white h-full', [children[0]])}
    </main>
  ),
};

export default MainStage;
