import DomainPill from './Nav/UI/Buttons/DomainPill.jsx';

const HeroSection = {
  view: ({ attrs }) => (
    <section id="hero" className="max-h-3/4">
      <header className="lg:h-1/2 flex flex-col items-end flex-none w-full h-auto mx-8 mt-12">
        <h1 className="flex text-center" style="font-size:600%">
          HabitFract
        </h1>
        <h1 className="lg:flex flex-wrap justify-end">
          Find
          <em className="top-1 md:mx-10 text-balance-pshades-gray outline-light relative p-4 px-6 mx-8">
            your
          </em>
          infinity
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
        className="bg-gradient-to-b from-transparent lg:space-x-4 md:mt-36 sm:pt-18 md:pb-16 to-white pt-26 flex flex-col px-12 pb-24"
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
          <h2>Choose a life domain:</h2>
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
