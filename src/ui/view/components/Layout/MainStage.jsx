const MainStage = {
  view: ({ attrs, children }) => (
    <main className="lg:top-24 md:top-12 flex flex-col flex-auto w-full mx-0">
      {attrs.isIndex
        ? children
        : m('section.cards.flex-1.bg-white h-full', [children[0]])}
    </main>
  ),
};

export default MainStage;
