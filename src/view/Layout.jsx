import DropdownNav from "./components/DropdownNav.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Footer from "./components/Footer.jsx";

const Routes = [
  {
    label: "Objectives",
    hrefs: {
      "obj/list": {
        title: "List Objectives",
        description: "A flat list of all objectives for your perusal.",
        icon: "objective-completion",
      },
      "obj/new": {
        title: "Add Objective",
        description: "Create a completely blank objective.",
        icon: "objective-mountain",
      },
      "obj/edit": {
        title: "Compose Objective Habits",
        description:
          "Link existing behaviors to a new objective, or move habits from one objective to the other.",
        icon: "objective-compose",
      },
    },
  },
  {
    label: "Visualise",
    hrefs: {
      "vis/habit-tree": {
        title: "Habit Tree",
        description:
          "Traditional hierarchical Tree diagram showing habit nodes.",
        icon: "fa-tree",
      },
      "vis/habit-triangle": {
        title: "Habit Triangle",
        description:
          "Fractal pyramid of habits. Navigate all the way up to the sky or drill down into the minutiae.",
        icon: "fa-caret-up",
      },
      "vis/date-lines": {
        title: "Date Comparison",
        description:
          "See how your different habits have overlapped over time using this line diagram.",
        icon: "fa-line-chart",
      },
      "vis/radial-tree": {
        title: "Radial Tree",
        description:
          "A pretty hierarchical tree diagram where your habits branch off from the centre of a circle.",
        icon: "fa-pagelines",
      },
    },
  },
  {
    label: "Habits",
    hrefs: {
      "habits/list": {
        title: "List Habits",
        description: "A flat list of all Habits for your perusal.",
        icon: "fa-tree",
      },
      "habits/new": {
        title: "Add Habit",
        description: "Create a completely blank habit.",
        icon: "fa-tree",
      },
      "habits/edit": {
        title: "Link Habits",
        description:
          "Link existing behaviors to a new habit, or move habits from one Habit to the other.",
        icon: "fa-tree",
      },
    },
  },
];
Routes.selected = "Habits";

export default function () {
  return {
    view: (vnode) => (
      <div id="layout" class="w-full h-full">
        <a class="logo-link text-gray-70 fixed z-50 hidden lg:block w-6 h-6">
          <svg
            enable-background="new 0 0 48 48"
            height="40px"
            viewBox="0 0 48 48"
            width="48px"
          >
            <path d="M15.34,45.5C8.26,45.5,2.5,39.74,2.5,32.66s5.76-12.84,12.84-12.84h1.31v8.37l-1.31,0c-2.47,0-4.47,2.01-4.47,4.47  c0,2.47,2.01,4.48,4.47,4.48c2.47,0,4.47-2.01,4.47-4.48l0-1.92v-15.4c0-7.08,5.76-12.84,12.84-12.84c7.08,0,12.84,5.76,12.84,12.84  s-5.76,12.84-12.84,12.84h-1.31v-8.37l1.31,0c2.47,0,4.47-2.01,4.47-4.47c0-2.47-2.01-4.47-4.47-4.47c-2.47,0-4.47,2.01-4.47,4.47  l0,1.92v15.4C28.18,39.74,22.42,45.5,15.34,45.5z" />
          </svg>
        </a>
        <div id="app" class="flex flex-col justify-between min-h-screen">
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
                  </nav>
                </div>
              </div>
              <nav id="subnav">
                <DropdownNav routes={Routes}></DropdownNav>
              </nav>
            </header>
          </div>
          <main class="bg-balance-hero z-10 flex flex-col flex-auto w-full">
            <div id="hero">
              <header class="md:h-56 lg:h-1/2 flex-none h-auto">
                <h1 class="sm:flex sm:justify-center">
                  Find{" "}
                  <em class="text-balance-secondary sm:px-4 md:px-8 px-2">
                    your
                  </em>{" "}
                  infinity
                </h1>
                <h2>
                  Drill down (or soar up) and <br class="lg:block hidden" />{" "}
                  leverage the power <br class="lg:block hidden" />
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
            </div>
            <section class="cards flex-1 bg-white">
              <h1>Your Tracking Data</h1>
              <Dashboard></Dashboard>
            </section>
            <Footer></Footer>
          </main>
        </div>
      </div>
    ),
  };
}
