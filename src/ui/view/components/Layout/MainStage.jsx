const MainStage = {
  view: ({ attrs: { index }, children: [componentNode] }) => (
    <main class="flex absolute mx-0 w-full top-16 md:top-12 flex-col flex-auto bg-balance-tershades-gray">
      {index
        ? componentNode
        : m("section.cards.flex-1.bg-white h-full", [
            m("h2", componentNode.attrs.heading),
            componentNode,
          ])}
    </main>
  ),
};

export default MainStage;
