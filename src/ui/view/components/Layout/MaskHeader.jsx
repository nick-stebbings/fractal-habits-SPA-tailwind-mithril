// src/view/components/Layout/MaskHeader.jsx

import DomainStore from '../../../store/domain-store';
import HabitStore from '../../../store/habit-store';
import DateStore from '../../../store/date-store';

import ResponsiveNavGroup from './Nav/ResponsiveNavGroup.jsx';
import DomainOption from './Nav/DomainOption.jsx';
import DropdownNav from './Nav/DropdownNav.jsx';
import MenuRoutes from '../../../menu-routes';
import { redraw } from '../../../assets/scripts/utilities';

import '../../../assets/styles/components/MaskHeader.scss';

const MaskHeader = function () {
  DateStore.index();
  let currentDateIndex = -1;

  return {
    oncreate: () => {
      const domainSelector = document.getElementById('domain-selector');
      const dateSelector = document.getElementById('date-today');

      domainSelector.addEventListener('change', (e) => {
        DomainStore.current(DomainStore.list()[e.target.selectedIndex]);
        HabitStore.current({ name: 'I changed' });
        console.log(HabitStore.current());
        m.redraw();
      });

      const nextDate = document.getElementById('next-date-selector');
      const prevDate = document.getElementById('prev-date-selector');

      prevDate.addEventListener('click', () => {
        DateStore.current(
          currentDateIndex === -DateStore.list().length
            ? DateStore.list()[0]
            : DateStore.list().slice(--currentDateIndex)[0],
        );
        m.redraw();
      });
      nextDate.addEventListener('click', () => {
        DateStore.current(
          currentDateIndex === -1
            ? DateStore.list().slice(currentDateIndex)[0]
            : DateStore.list().slice(++currentDateIndex)[0],
        );
        m.redraw();
      });
    },
    view: () => (
      <div className="mask-wrapper">
        <header className="bg-balance-dp md:h-12 z-10 flex-none h-16">
          <div
            id="responsive-nav"
            className="md:h-12 md:px-2 lg:px-0 flex items-center justify-between h-16 px-4"
          >
            {m(
              m.route.Link,
              {
                selector: 'span',
                href: '/',
                class: 'block h-10 logo md:h-8',
              },
              <svg
                id="logo"
                className="hover:text-balance-lmint md:ml-1 md:w-8 md:h-8 w-10 h-10 text-gray-100 fill-current stroke-current"
                width="54"
                height="54"
                viewBox="0 0 54 54"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15.34,45.5C8.26,45.5,2.5,39.74,2.5,32.66s5.76-12.84,12.84-12.84h1.31v8.37l-1.31,0c-2.47,0-4.47,2.01-4.47,4.47  c0,2.47,2.01,4.48,4.47,4.48c2.47,0,4.47-2.01,4.47-4.48l0-1.92v-15.4c0-7.08,5.76-12.84,12.84-12.84c7.08,0,12.84,5.76,12.84,12.84  s-5.76,12.84-12.84,12.84h-1.31v-8.37l1.31,0c2.47,0,4.47-2.01,4.47-4.47c0-2.47-2.01-4.47-4.47-4.47c-2.47,0-4.47,2.01-4.47,4.47  l0,1.92v15.4C28.18,39.74,22.42,45.5,15.34,45.5z" />
              </svg>,
            )}
            ,
            <div
              id="hamburger-wrapper"
              className="md:h-8 lg:flex-auto flex h-10"
            >
              <div className="active:outline-light focus:outline-light hover:bg-balance-lp md:w-8 md:h-8 flex items-center justify-center w-10 h-10 rounded-md">
                <label
                  htmlFor="hamburger"
                  className="text-balance-secondary border-1 lg:hidden md:w-6 md:h-6 block w-8 h-8"
                >
                  <svg
                    className="text-balance-secondary stroke-current"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    )
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </label>
              </div>
              <input type="checkbox" id="hamburger" className="hidden" />
              <nav className="top-16 lg:-mt-4 lg:border-balance-lg bg-balance-mint lg:border-0 md:top-12 lg:flex lg:justify-end lg:items-center lg:static lg:flex-row bg-balance-dp lg:bg-transparent sm:flex-row sm:flex-wrap lg:flex-nowrap absolute left-0 z-20 flex-col hidden w-full border-b-4 shadow-lg">
                <div className="md:pl-16 sm:pl-24 sm:my-2 sm:w-2/5 lg:w-auto lg:p-0 lg:border-0 lg:ml-8 lg:flex lg:flex-1 lg:justify-end lg:flex-row-reverse flex flex-col content-center justify-between px-4 pt-1 pb-2">
                  <div className="nav-label-primary bg-gradient-to-l sm:flex-col lg:flex-row lg:border-2 border-balance-dp max-w-12 from-balance-mint to-balance-hero lg:rounded-3xl lg:rounded-t-none text-balance-blacktext-sm lg:-mt-3 lg:mr-2 flex items-center justify-between mt-2 rounded-full">
                    <span className="lg:hidden xl:block pt-2 pb-0 mx-4 mb-1">
                      Domain
                    </span>
                    <div className="sm:w-full lg:pr-0 lg:rounded-3xl lg:rounded-t-none border-balance-dg w-2/3 h-full pr-4 text-sm bg-white border-2 rounded-full">
                      <span className="text-balance-secondary block w-full pt-2 mx-4 mb-1">
                        {m(
                          'select.form-select#domain-selector',
                          {
                            class:
                              'w-full text-center lg:w-48 text-lg py-1 lg:pt-2 pl-0 pr-6 -mr-4 rounded-2xl',
                          },
                          DomainStore.list().map((domain, idx) => m(
                            DomainOption,
                            { value: domain.name, selected: !idx },
                            domain.name,
                          )),
                        )}
                      </span>
                    </div>
                  </div>
                  <div className="nav-label-primary bg-gradient-to-l sm:flex-col lg:flex-row lg:border-2 border-balance-dp max-w-12 from-balance-mint to-balance-hero lg:rounded-3xl lg:rounded-t-none text-balance-blacktext-sm lg:-mt-3 lg:mr-2 flex items-center justify-between mt-2 rounded-full">
                    <span className="lg:hidden xl:block md:pt-2 pt-0 pb-0 mx-4 mb-1">
                      Date
                    </span>
                    <div className="sm:w-full lg:pr-0 lg:rounded-3xl lg:rounded-t-none border-balance-dg w-2/3 h-full pr-8 text-sm bg-white border-2 rounded-full">
                      <span className="lg:pt-2 text-balance-secondary block w-full mx-4 mb-1">
                        <i
                          id="prev-date-selector"
                          className="fa fa-chevron-circle-left pr-1"
                          aria-hidden="true"
                        />
                        {m('input.form-input', {
                          class:
                            'w-full lg:w-48 text-center text-xl lg:pt-2 -mr-2 py-1 px-0',
                          type: 'date',
                          id: 'date-today',
                          max: DateStore.currentDate(),
                          value: DateStore.currentDate(),
                        })}
                        <i
                          id="next-date-selector"
                          className="fa fa-chevron-circle-right pl-1"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="sm:w-3/5 lg:border-none lg:w-auto lg:mt-1 text-md md:px-0 lg:flex-row flex flex-wrap items-center justify-around px-4 py-1 mt-3">
                  <div className="lg:border-1 border-balance-lg lg:flex-row-reverse bg-balance-lmint lg:bg-balance-lp lg:py-0 lg:rounded-3xl lg:rounded-t-none flex items-center justify-between py-2 pl-4 mb-2 mr-1 border-2 rounded-full">
                    <img
                      className="lg:border-1 lg:border-balance-hero lg:rounded-3xl lg:rounded-t-none border-1 border-balance-lmint flex-none object-cover w-10 h-10 rounded-full"
                      src="https://images.unsplash.com/photo-1597020642626-3c9b687eba70?ixid=MXwxMjA3fDB8MXxzZWFyY2h8MXx8bWFuJ3MlMjBmYWNlfHwwfHx8&ixlib=rb-1.2.1&dpr=1&auto=format&fit=crop&w=120&h=200&q=60"
                      alt=""
                    />
                    <span className="user-nav-label lg:text-balance-lmint sm:px-0 lg:ml-0 lg:mr-4 lg:mb-1 lg:px-0 px-2 mx-4 font-light">
                      Your Name Is
                      {' '}
                      <span>Dave</span>
                    </span>
                  </div>
                  <div className="lg:hidden flex flex-col px-4 font-bold tracking-wide">
                    <button className="active:outline hover:text-balance-lp px-4 py-2 mt-2 font-sans text-lg font-semibold text-center uppercase">
                      Account Details
                    </button>
                    <button className="active:outline hover:text-balance-lp px-4 py-2 mt-2 font-sans text-lg font-semibold text-center uppercase">
                      Logout
                    </button>
                  </div>
                </div>
                <ul className="lg:hidden flex flex-col-reverse w-full">
                  {MenuRoutes.map((route) => (
                    <ResponsiveNavGroup
                      id={`nav-${route.label.toLowerCase()}`}
                      class={
                        MenuRoutes.selected === route.label
                          ? 'active'
                          : 'inactive'
                      }
                      label={route.label}
                      url={`${route.path}`}
                    >
                      {route.subpaths}
                    </ResponsiveNavGroup>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
          <nav id="subnav">
            <DropdownNav routes={MenuRoutes} />
          </nav>
        </header>
      </div>
    ),
  };
};

export default MaskHeader;
