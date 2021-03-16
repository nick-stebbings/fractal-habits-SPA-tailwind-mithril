import DomainPill from "./DomainPill.jsx"

const HeroSection = {
  view: () => (
    <section id="hero">
      <header class="md:h-56 lg:h-1/2 flex-none h-auto mx-8 mt-12">
        <h1 class="sm:flex sm:justify-center">
          Find <em class="px-4 text-balance-secondary sm:px-4 md:px-8">your</em>{" "}
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
        <h2>Choose a life domain:</h2>
        <div class="domain-pills">
          {[
            "Physical Health",
            "Mental Health",
            "Spirituality",
            "Giving",
            "Career",
          ].map((domain, idx) => m(DomainPill, {
            name: domain,
            rank: idx
          }))}
        </div>
      </div>
    </section>
  ),
};

export default HeroSection;
