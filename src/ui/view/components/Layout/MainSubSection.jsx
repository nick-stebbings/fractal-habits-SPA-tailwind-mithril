const MainSubSection = {
  view: ({ attrs, children }) => (
    <section className="sub-section-container flex flex-col justify-start w-1/2 px-4">
      <h1>{attrs.heading}</h1>
      <main>{children}</main>
    </section>
  ),
};

export default MainSubSection;
