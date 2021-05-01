const MainStage = {
  view: ({ attrs, children }) => (
    <main class="flex absolute mx-0 w-full top-16 md:top-12 flex-col flex-auto bg-balance-tershades-gray">
      <div class="lg:hidden" id="current-habit-label-sm">
        <span id="current-habit-sm" class="px-2">Selected:</span>
        <span>asdasdasdasd</span>
      </div>
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
