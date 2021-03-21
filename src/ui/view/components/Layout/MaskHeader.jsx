// src/view/components/Layout/MaskHeader.jsx

import DomainStore from "../../../store/domain-store";
import DateStore from "../../../store/date-store";

import ResponsiveNavGroup from "./Nav/ResponsiveNavGroup.jsx";
import DomainOption from "./Nav/DomainOption.jsx";
import DropdownNav from "./Nav/DropdownNav.jsx";
import MenuRoutes from "../../../menu-routes";

import "../../../assets/styles/components/MaskHeader.scss";

const MaskHeader = {
  view: () => (
    <div class="mask-wrapper">
      <header class="z-10 flex-none h-16 bg-balance-dp md:h-12">
        <div
          id="responsive-nav"
          class="flex justify-between items-center px-4 h-16 md:h-12 md:px-2 lg:px-0"
        >
          {m(
            m.route.Link,
            {
              selector: "span",
              href: "/",
              class: "block h-10 logo md:h-8",
            },
            <svg
              id="logo"
              class="w-10 h-10 text-gray-100 fill-current stroke-current hover:text-balance-lmint md:ml-1 md:w-8 md:h-8"
              width="54"
              height="54"
              viewBox="0 0 54 54"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15.34,45.5C8.26,45.5,2.5,39.74,2.5,32.66s5.76-12.84,12.84-12.84h1.31v8.37l-1.31,0c-2.47,0-4.47,2.01-4.47,4.47  c0,2.47,2.01,4.48,4.47,4.48c2.47,0,4.47-2.01,4.47-4.48l0-1.92v-15.4c0-7.08,5.76-12.84,12.84-12.84c7.08,0,12.84,5.76,12.84,12.84  s-5.76,12.84-12.84,12.84h-1.31v-8.37l1.31,0c2.47,0,4.47-2.01,4.47-4.47c0-2.47-2.01-4.47-4.47-4.47c-2.47,0-4.47,2.01-4.47,4.47  l0,1.92v15.4C28.18,39.74,22.42,45.5,15.34,45.5z" />
            </svg>
          )}
          ,
          <div id="hamburger-wrapper" class="flex h-10 md:h-8 lg:flex-auto">
            <div class="flex justify-center items-center w-10 h-10 rounded-md active:outline-light focus:outline-light hover:bg-balance-lp md:w-8 md:h-8">
              <label
                for="hamburger"
                class="block w-8 h-8 text-balance-secondary border-1 lg:hidden md:w-6 md:h-6"
              >
                <svg
                  class="stroke-current text-balance-secondary"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  )
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </label>
            </div>
            <input type="checkbox" id="hamburger" class="hidden" />
            <nav class="hidden absolute left-0 top-16 z-20 flex-col w-full border-b-4 shadow-lg lg:-mt-4 lg:border-balance-lg bg-balance-mint lg:border-0 md:top-12 lg:flex lg:justify-end lg:items-center lg:static lg:flex-row bg-balance-dp lg:bg-transparent sm:flex-row sm:flex-wrap lg:flex-nowrap">
              <div class="flex flex-col content-center md:pl-16 sm:pl-24 sm:my-2 sm:w-2/5 lg:w-auto lg:p-0 lg:border-0 lg:ml-8 lg:flex lg:flex-1 lg:justify-end lg:flex-row-reverse justify-between pt-1 px-4 pb-2">
                <div class="nav-label-primary flex justify-between items-center mt-2 bg-gradient-to-l rounded-full sm:flex-col lg:flex-row lg:border-2 border-balance-dp max-w-12 from-balance-mint to-balance-hero lg:rounded-3xl lg:rounded-t-none text-balance-blacktext-sm lg:-mt-3 lg:mr-2">
                  <span class="lg:hidden xl:block pt-2 pb-0 mx-4 mb-1">
                    Domain
                  </span>
                  <div class="w-2/3 sm:w-full pr-4 lg:pr-0 h-full bg-white rounded-full border-2 text-sm lg:rounded-3xl lg:rounded-t-none border-balance-dg">
                    <span class="w-full block pt-2 mx-4 mb-1 text-balance-secondary">
                      {m(
                        "select.form-select",
                        {
                          class:
                            "w-full text-center lg:w-48 text-lg py-1 lg:pt-2 pl-0 pr-6 -mr-4 rounded-2xl",
                        },
                        DomainStore.list().map((domain, idx) =>
                          m(
                            DomainOption,
                            { value: domain.name, selected: !idx },
                            domain.name
                          )
                        )
                      )}
                    </span>
                  </div>
                </div>
                <div class="nav-label-primary flex justify-between items-center mt-2 bg-gradient-to-l rounded-full sm:flex-col lg:flex-row lg:border-2 border-balance-dp max-w-12 from-balance-mint to-balance-hero lg:rounded-3xl lg:rounded-t-none text-balance-blacktext-sm lg:-mt-3 lg:mr-2">
                  <span class="lg:hidden xl:block pt-0 md:pt-2 pb-0 mx-4 mb-1">
                    Date
                  </span>
                  <div class="w-2/3 sm:w-full pr-8 lg:pr-0 h-full bg-white rounded-full border-2 text-sm lg:rounded-3xl lg:rounded-t-none border-balance-dg">
                    <span class="w-full block lg:pt-2 mx-4 mb-1 text-balance-secondary">
                      {m("input.form-input", {
                        class:
                          "w-full lg:w-48 text-center text-xl lg:pt-2 -mr-2 py-1 px-0",
                        type: "date",
                        id: "date-today"
                      },
                      DateStore.current())}
                    </span>
                  </div>
                </div>
              </div>
              <div class="sm:w-3/5 lg:border-none lg:w-auto mt-3 lg:mt-1 text-md py-1 px-4 md:px-0 lg:flex-row flex flex-wrap justify-around items-center">
                <div class="flex justify-between items-center py-2 pl-4 mr-1 mb-2 rounded-full border-2 lg:border-1 border-balance-lg lg:flex-row-reverse bg-balance-lmint lg:bg-balance-lp lg:py-0 lg:rounded-3xl lg:rounded-t-none">
                  <img
                    class="object-cover flex-none w-10 h-10 rounded-full lg:border-1 lg:border-balance-hero lg:rounded-3xl lg:rounded-t-none border-1 border-balance-lmint"
                    src="https://images.unsplash.com/photo-1597020642626-3c9b687eba70?ixid=MXwxMjA3fDB8MXxzZWFyY2h8MXx8bWFuJ3MlMjBmYWNlfHwwfHx8&ixlib=rb-1.2.1&dpr=1&auto=format&fit=crop&w=120&h=200&q=60"
                    alt=""
                  />
                  <span class="user-nav-label font-light lg:text-balance-lmint px-2 sm:px-0 mx-4 lg:ml-0 lg:mr-4 lg:mb-1 lg:px-0">
                    Your Name Is <span>Dave</span>
                  </span>
                </div>
                <div class="flex flex-col px-4 font-bold tracking-wide lg:hidden">
                  <button class="mt-2 py-2 px-4 font-sans text-lg font-semibold text-center uppercase active:outline hover:text-balance-lp">
                    Account Details
                  </button>
                  <button class="mt-2 py-2 px-4 font-sans text-lg font-semibold text-center uppercase active:outline hover:text-balance-lp">
                    Logout
                  </button>
                </div>
              </div>
              <ul class="flex flex-col-reverse w-full lg:hidden">
                {MenuRoutes.map((route) => (
                  <ResponsiveNavGroup
                    id={`nav-${route.label.toLowerCase()}`}
                    class={
                      MenuRoutes.selected === route.label
                        ? "active"
                        : "inactive"
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
          <DropdownNav routes={MenuRoutes}></DropdownNav>
        </nav>
      </header>
    </div>
  ),
};

export default MaskHeader;
