import DomainPill from "./Nav/UI/Buttons/DomainPill.jsx";

const HeroSection = {
  view: ({ attrs }) => (
    <section id="hero">
      <header class="md:h-56 lg:h-1/2 flex-none h-auto mx-8 mt-12">
        <h1 class="sm:flex sm:justify-center">
          Find{" "}
          <em class="px-4 text-balance-sshades-brighten sm:px-4 md:px-8">
            your
          </em>{" "}
          infinity
        </h1>
        <h2>
          Drill down (or soar up) and <br class="hidden lg:block" /> leverage
          the power <br class="hidden lg:block" />
          of incremental behavioural change.
        </h2>
      </header>
      <div
        id="call-to-action"
        class="flex flex-col px-12 pb-4 mt-6 bg-gradient-to-b from-transparent md:mt-20 md:pb-12 sm:mt-4 lg:space-x-4 to-white"
      >
        {m.route.param("demo") ? (
          <div>
            <h2>
              Life-domains and habits for tracking have been loaded from
              web-scraped data as a demonstration of utilising two different
              data sources
            </h2>
            <h3>
              <m.route.Link
                selector="span"
                href={m.route.param("demo") ? "/" : "/?demo=true"}
              >
                CLICK
              </m.route.Link>{" "}
              to switch to a writeable database version.
            </h3>
          </div>
        ) : (
          <h2>Choose a life domain:</h2>
        )}
        <div class="domain-pills">
          {[
            "Physical Health",
            "Mental Health",
            "Spirituality",
            "Giving",
            "Career",
          ].map(
            (domain, idx) =>
              !m.route.param("demo") &&
              m(DomainPill, {
                name: domain,
                rank: idx,
                modalType: attrs.modalType,
              })
          )}
        </div>
      </div>
    </section>
  ),
};

export default HeroSection;
