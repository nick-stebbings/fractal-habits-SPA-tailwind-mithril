const MainStage = {
  view: ({ attrs: { index }, children: [mainPage] }) => (
    <main class="flex absolute mx-0 w-full top-16 md:top-12 flex-col flex-auto bg-balance-tershades-gray">
      {index
        ? mainPage
        : m("section.cards.flex-1.bg-white h-full", [
            m("h2", mainPage.attrs.heading),
            mainPage,
          ])}
    </main>
  ),
};

export default MainStage;
