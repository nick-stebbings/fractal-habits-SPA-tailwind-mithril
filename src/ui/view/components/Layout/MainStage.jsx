const MainStage = {
  view: ({ attrs, children }) => (
    <main class="flex absolute mx-0 w-full top-16 md:top-12 flex-col flex-auto bg-balance-tershades-gray">
      {attrs.index
        ? children
        : m("section.cards.flex-1.bg-white h-full", [
            m("h2", children[0].attrs),
            children[0],
          ])}
    </main>
  ),
};

export default MainStage;
