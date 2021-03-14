const MainStage = {
  view: ({ attrs: { index }, children: [mainPage] }) => (
    <main class="flex z-10 flex-col flex-auto w-screen h-full bg-balance-hero">
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
