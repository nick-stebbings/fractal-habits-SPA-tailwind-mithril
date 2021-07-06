const MainStage = {
  view: ({ attrs, children }) => (
    <main
      className={
        attrs.isIndex
          ? 'lg:top-24 md:top-12 wrapper justify-items-center gap-x-1 gap-y-3 bg-gray-50 grid grid-cols-5'
          : 'lg:pt-46 lg:top-24 md:top-12 wrapper bg-gray-50'
      }
    >
      <div className="opacity-10 watermark absolute z-40 hidden w-screen h-screen" />
      {attrs.isIndex
        ? children
        : m(
          attrs.isVis
            ? 'section.cards.flex-1.h-full.w-full.overflow-x-0.bg-transparent.z-50'
            : 'section.cards.flex-1.h-full.w-full.overflow-x-0.bg-transparent.z-50.px-4',
          [children[0]],
        )}
    </main>
  ),
};

export default MainStage;
