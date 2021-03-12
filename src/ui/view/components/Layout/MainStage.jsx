const MainStage = {
  view: ({ attrs: index, children: [mainPage] }) => (
    <main class="bg-balance-hero z-10 flex flex-col flex-auto w-full">
      {index
        ? mainPage
        : m("section.cards.flex-1.bg-white", [m("h1"), m(mainPage)])}
    </main>
  ),
};

export default MainStage;
