const HeroSection = {
  view: () => (
    <section id="hero">
      <header class="md:h-56 lg:h-1/2 flex-none h-auto">
        <h1 class="sm:flex sm:justify-center">
          Find <em class="text-balance-secondary sm:px-4 md:px-8 px-2">your</em>{" "}
          infinity
        </h1>
        <h2>
          Drill down (or soar up) and <br class="lg:block hidden" /> leverage
          the power <br class="lg:block hidden" />
          of incremental behavioural change.
        </h2>
      </header>
      <div
        id="call-to-action"
        class="md:mt-12 md:pb-12 sm:mt-4 lg:space-x-4 bg-gradient-to-b from-transparent to-balance-dg flex flex-col px-12 pb-4 mt-6"
      >
        <h2>Choose a life domain:</h2>
        <div class="domain-pills">
          {[
            "Physical Health",
            "Mental Health",
            "Spirituality",
            "Giving",
            "Career",
          ].map((domain) => (
            <button class="domain-create pr-3">
              <div class="md:text-l flex items-center justify-between p-4 my-4 text-sm text-gray-200 bg-gray-700 rounded-full shadow-md">
                {domain}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  ),
};

export default HeroSection;
