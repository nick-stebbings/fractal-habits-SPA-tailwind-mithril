// src/view/components/Layout/MaskHeader.jsx
import ResponsiveNavGroup from "./Nav/ResponsiveNavGroup.jsx";
import DropdownNav from "./Nav/DropdownNav.jsx";
import MenuRoutes from "../../../menu-routes";

import "../../../assets/css/components/partials/MaskHeader.scss";

const MaskHeader = {
  view: ({ attrs, children }) => (
    <div class="mask-wrapper">
      <header class="bg-balance-dp z-10 flex-none h-12">
        <div id="responsive-nav" class="flex items-start justify-between">
          <a class="logo block w-8 h-8">
            <svg
              id="logo"
              class="hover:text-balance-lmint md:ml-1 w-8 h-8 text-gray-100 fill-current stroke-current"
              width="54"
              height="54"
              viewBox="0 0 54 54"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15.34,45.5C8.26,45.5,2.5,39.74,2.5,32.66s5.76-12.84,12.84-12.84h1.31v8.37l-1.31,0c-2.47,0-4.47,2.01-4.47,4.47  c0,2.47,2.01,4.48,4.47,4.48c2.47,0,4.47-2.01,4.47-4.48l0-1.92v-15.4c0-7.08,5.76-12.84,12.84-12.84c7.08,0,12.84,5.76,12.84,12.84  s-5.76,12.84-12.84,12.84h-1.31v-8.37l1.31,0c2.47,0,4.47-2.01,4.47-4.47c0-2.47-2.01-4.47-4.47-4.47c-2.47,0-4.47,2.01-4.47,4.47  l0,1.92v15.4C28.18,39.74,22.42,45.5,15.34,45.5z" />
            </svg>
          </a>
          <div id="hamburger-wrapper" class="lg:h-8 lg:flex-auto flex">
            <div class="active:outline-light focus:outline-light hover:bg-balance-lp flex items-center justify-center w-8 h-8 rounded-md">
              <label
                for="hamburger"
                class="text-balance-secondary border-1 lg:hidden block w-6 h-6"
              >
                <svg
                  class="text-balance-secondary stroke-current"
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
            <nav class="lg:-mt-4 lg:border-balance-lg bg-balance-mint lg:border-0 top-14 lg:flex lg:justify-end lg:items-center lg:static lg:flex-row bg-balance-dp lg:bg-transparent absolute left-0 z-20 flex-col hidden w-full border-b-4 shadow-lg">
              <div class="lg:p-0 sm:max-w-1/2 sm:mx-auto lg:border-0 lg:ml-8 lg:flex lg:flex-1 lg:justify-end lg:flex-row-reverse justify-between p-4 mt-3 border-b-2">
                <div class="nav-label-primary lg:border-2 border-balance-hero max-w-12 bg-gradient-to-l from-balance-mint to-balance-hero lg:rounded-3xl lg:rounded-t-none text-balance-blacktext-sm lg:-mt-2 lg:mr-2 flex items-center justify-between mt-2 rounded-full">
                  <span class="block py-0 mx-2 mb-1 font-semibold tracking-wide uppercase">
                    Domain
                  </span>
                  <div class="nav-label-primary text-s lg:rounded-3xl lg:rounded-t-none bg-balance-lmint border-balance-dg h-full border-2 rounded-full">
                    <span class="text-balance-secondary block py-1 mx-4 mb-1 font-semibold tracking-wide">
                      Physical Health
                    </span>
                  </div>
                </div>
                <div class="nav-label-primary lg:border-2 border-balance-hero max-w-12 bg-gradient-to-l from-balance-mint to-balance-hero lg:rounded-3xl lg:rounded-t-none text-balance-blacktext-sm lg:-mt-2 lg:mr-2 flex items-center justify-between mt-2 rounded-full">
                  <span class="block py-0 mx-2 mb-1 font-semibold tracking-wide uppercase">
                    Date
                  </span>
                  <div class="nav-label-primary text-s lg:rounded-3xl lg:rounded-t-none bg-balance-lmint border-balance-dg h-full border-2 rounded-full">
                    <span class="text-balance-secondary block py-1 mx-4 mb-1 font-semibold tracking-wide">
                      Physical Health
                    </span>
                  </div>
                </div>
              </div>
              <div class="mt-3 lg:mt-1.5 text-md px-4 lg:p-2 lg:flex-row py-4 flex flex-wrap justify-around items-center">
                <div class="lg:border-1 border-balance-lg lg:flex-row-reverse bg-balance-lmint lg:bg-balance-lp lg:py-0 lg:rounded-3xl lg:rounded-t-none flex items-center justify-between py-2 pl-4 mr-1 border-2 rounded-full">
                  <img
                    class="lg:border-1 lg:border-balance-hero lg:rounded-3xl lg:rounded-t-none border-1 border-balance-lmint flex-none object-cover w-10 h-10 rounded-full"
                    src="https://images.unsplash.com/photo-1597020642626-3c9b687eba70?ixid=MXwxMjA3fDB8MXxzZWFyY2h8MXx8bWFuJ3MlMjBmYWNlfHwwfHx8&ixlib=rb-1.2.1&dpr=1&auto=format&fit=crop&w=120&h=200&q=60"
                    alt=""
                  />
                  <span class="nav-label lg:text-balance-mint text-balance-dp lg:ml-0 lg:mr-4 lg:mb-1 py-1 mx-4 font-semibold">
                    Your Name Is Dave
                  </span>
                </div>
                <div class="lg:hidden flex flex-col p-4 font-bold tracking-wide">
                  <a class="nav-label-primary hover:underline mt-2 text-xl uppercase">
                    Account Details
                  </a>
                  <a class="nav-label-primary hover:underline mt-2 text-xl uppercase">
                    Logout
                  </a>
                </div>
              </div>
              <ul class="lg:hidden">
                {MenuRoutes.map((route) => (
                  // <li>{route.label}</li>
                  <ResponsiveNavGroup
                    id={`nav-${route.label.toLowerCase()}`}
                    class={
                      MenuRoutes.selected === route.label
                        ? "active"
                        : "inactive"
                    }
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
