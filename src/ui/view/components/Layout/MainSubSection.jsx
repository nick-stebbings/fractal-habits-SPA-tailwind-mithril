const MainSubSection = {
  view: ({ attrs, children }) => (
    <section className="sub-section-container sm:w-1/2 flex flex-col justify-start w-full px-4">
      <h1>{attrs.heading}</h1>
      <main>{children}</main>
    </section>
  ),
};

export default MainSubSection;
