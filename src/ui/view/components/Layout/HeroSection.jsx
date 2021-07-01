import DomainPill from './Nav/UI/Buttons/DomainPill.jsx';

const HeroSection = {
  view: ({ attrs }) => (
    <section id="hero" className="max-h-3/4">
      <header className="sm:md-12 md:px-16 lg:w-3/4 lg:mx-auto md:mx-8 flex flex-col items-end flex-none w-full h-auto px-2 mx-2 mt-12">
        <h1
          className="md:flex-row flex flex-col flex-wrap text-center"
          style="font-size:900%"
        >
          <span>Habit</span>
          <span>
            <em
              className="right-2 text-balance-sshades-dark top-6 relative z-10"
              style="text-shadow: none;-webkit-text-stroke-width: 0px;"
            >
              /
            </em>
            <span className="z-10">Fract</span>
          </span>
        </h1>
        <h1 className="flex flex-col flex-wrap justify-end">
          Find
          <em className="md:mx-12 text-balance-pshades-gray outline-light relative flex py-6 pl-16 pr-6 mx-8 my-6">
            your
          </em>
          <span className="relative pl-4">infinity</span>
        </h1>
        <h2>
          Drill down (or soar up) and
          {' '}
          <br className="lg:block hidden" />
          {' '}
          leverage the power
          {' '}
          <br className="lg:block hidden" />
          of incremental behavioural change.
        </h2>
      </header>
      <div
        id="call-to-action"
        className="bg-gradient-to-b from-transparent lg:space-x-8 md:mt-16 sm:pt-18 md:pb-16 to-white pt-26 flex flex-col px-12 pb-24"
      >
        {m.route.param('demo') ? (
          <div>
            <h2>
              Life-domains and habits for tracking have been loaded from
              web-scraped data as a demonstration of utilising two different
              data sources
            </h2>
            <h3>
              <m.route.Link
                selector="span"
                href={m.route.param('demo') ? '/' : '/?demo=true'}
              >
                CLICK
              </m.route.Link>
              {' '}
              to switch to a writeable database version.
            </h3>
          </div>
        ) : (
          !m.route.param('demo') && <h2>Choose a life domain:</h2>
        )}
        <div className="domain-pills">
          {[
            'Physical Health',
            'Mental Health',
            'Spirituality',
            'Giving',
            'Career',
          ].map(
            (domain, idx) => !m.route.param('demo')
              && m(DomainPill, {
                name: domain,
                rank: idx,
                modalType: attrs.modalType,
              }),
          )}
        </div>
      </div>
    </section>
  ),
};

export default HeroSection;
