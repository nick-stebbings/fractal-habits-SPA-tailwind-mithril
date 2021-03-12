const MainStage = {
  view: ({ attrs: { index }, children: [mainPage] }) => (
    <main class="bg-balance-hero z-10 flex flex-col flex-auto w-full h-full">
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
