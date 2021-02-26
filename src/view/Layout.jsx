import NavBar from "./components/SubNav.jsx";
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
];

export default function () {
  return {
    view: (vnode) => (
      <div id="app" class="min-h-screen flex flex-col justify-between">
        <header class="bg-balance-dp h-24 py-2 flex-none">
          <div class="flex justify-between items-start">
            <a class="logo block w-8 h-8">
              <svg
                id="logo"
                class="text-gray-100 hover:text-balance-lmint h-8 w-8 md:ml-1 stroke-current fill-current"
                width="54"
                height="54"
                viewBox="0 0 54 54"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15.34,45.5C8.26,45.5,2.5,39.74,2.5,32.66s5.76-12.84,12.84-12.84h1.31v8.37l-1.31,0c-2.47,0-4.47,2.01-4.47,4.47  c0,2.47,2.01,4.48,4.47,4.48c2.47,0,4.47-2.01,4.47-4.48l0-1.92v-15.4c0-7.08,5.76-12.84,12.84-12.84c7.08,0,12.84,5.76,12.84,12.84  s-5.76,12.84-12.84,12.84h-1.31v-8.37l1.31,0c2.47,0,4.47-2.01,4.47-4.47c0-2.47-2.01-4.47-4.47-4.47c-2.47,0-4.47,2.01-4.47,4.47  l0,1.92v15.4C28.18,39.74,22.42,45.5,15.34,45.5z" />
              </svg>
            </a>
            <div id="hamburger-wrapper" class="flex lg:h-8 lg:flex-auto">
              <div class="rounded-md w-8 h-8 active:outline-light focus:outline-light hover:bg-balance-lp flex items-center justify-center">
                <label
                  for="hamburger"
                  class="text-balance-secondary border-1 block lg:hidden w-6 h-6"
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
              <nav class="bg-balance-mint z-20 border-b-4 lg:border-b-0 shadow-lg absolute w-full top-14 left-0 hidden lg:flex lg:justify-end lg:items-center lg:static flex-col lg:flex-row bg-balance-dp lg:bg-balance-dp">
                <div class="p-4 lg:p-0 sm:max-w-1/2 sm:mx-auto border-b-2 lg:border-0 lg:ml-8 lg:flex lg:flex-1 lg:justify-end justify-between lg:flex-row-reverse">
                  <div class="flex justify-between max-w-12 items-center bg-gradient-to-l from-balance-mint to-balance-hero rounded-full text-balance-blacktext-sm mt-2 lg:mt-0 lg:mr-2">
                    <span class="block mx-4 py-1 uppercase font-bold tracking-wider">
                      Domain
                    </span>
                    <div class="nav-label-primary h-full text-s border-2 rounded-full bg-balance-lmint border-balance-dg">
                      <span class="block py-2 mx-4 text-balance-secondary font-semibold tracking-wide">
                        Physical Health
                      </span>
                    </div>
                  </div>
                  <div class="nav-label-primary flex justify-between max-w-12 items-center bg-gradient-to-l from-balance-mint to-balance-hero rounded-full text-balance-blacktext-sm mt-2 lg:mt-0 lg:mr-2">
                    <span class="block mx-4 py-1 uppercase font-bold tracking-wider">
                      Domain
                    </span>
                    <div class="nav-label-primary h-full text-s border-2 rounded-full bg-balance-lmint border-balance-dg">
                      <span class="block py-2 mx-4 text-balance-secondary font-semibold tracking-wide">
                        Physical Health
                      </span>
                    </div>
                  </div>
                </div>
                <div class="text-xs px-4 lg:p-0 lg:flex-row py-4 flex flex-wrap justify-around items-center">
                  <div class="mr-1 border-2 border-balance-lg flex justify-between items-center lg:flex-row-reverse bg-balance-lmint lg:bg-balance-lp pl-4 py-2 lg:py-0 rounded-full">
                    <img
                      class="lg:border-1 lg:border-balance-hero flex-none h-10 w-10 object-cover rounded-full border-1 border-balance-lmint"
                      src="https://images.unsplash.com/photo-1597020642626-3c9b687eba70?ixid=MXwxMjA3fDB8MXxzZWFyY2h8MXx8bWFuJ3MlMjBmYWNlfHwwfHx8&ixlib=rb-1.2.1&dpr=1&auto=format&fit=crop&w=120&h=200&q=60"
                      alt=""
                    />
                    <span class="nav-label lg:text-balance-mint text-balance-dp mx-4 lg:ml-0 lg:mr-4 font-semibold">
                      Your Name Is Dave
                    </span>
                  </div>
                  <div class="p-4 lg:hidden flex flex-col font-bold tracking-wide">
                    <a class="nav-label-primary uppercase text-xl mt-2 hover:underline">
                      Account Details
                    </a>
                    <a class="nav-label-primary uppercase text-xl mt-2 hover:underline">
                      Logout
                    </a>
                  </div>
                </div>
              </nav>
            </div>
          </div>
          <div id="subnav">
            <NavBar routes={Routes}></NavBar>
          </div>
        </header>
        <main class="flex flex-col z-10 flex-auto bg-balance-hero">
          <div id="hero">
            <section class="flex-none h-auto md:h-56 lg:h-1/2">
              <header>
                <h1 class="sm:flex sm:justify-center">
                  Find{" "}
                  <em class="text-balance-secondary px-2 sm:px-4 md:px-8">
                    your
                  </em>{" "}
                  infinity
                </h1>
                <h2>
                  Drill down (or soar up) and <br class="hidden lg:block" />{" "}
                  leverage the power <br class="hidden lg:block" />
                  of incremental behavioural change.
                </h2>
              </header>
            </section>
            <div
              id="call-to-action"
              class="mt-6 md:mt-12 pb-4 md:pb-12 sm:mt-4 md:mt-12 px-12 flex flex-col lg:space-x-4 bg-gradient-to-b from-transparent to-balance-dg"
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
                    <div class="text-sm md:text-l flex items-center justify-between rounded-full shadow-md bg-gray-700 text-gray-200 p-4 my-4">
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
        </main>
        <Footer></Footer>
      </div>
    ),
  };
}
// <Nav />
// <HeroSection />
// <CardSection />
// <Footer/>

// <div class="container w- h-full flex flex-col justify-between">
//   <nav class="container flex justify-between items-center flex-none h-12">
//     <a class="logo-link bg-red-300 block w-8 h-8">
//       <svg  id="logo"
//             class="fill-current h-8 w-8 md:ml-1 md:mt-2 md:fixed"
//             width="54" height="54" viewBox="0 0 54 54"
//             xmlns="http://www w3.org/2000/svg">
//         <path d="M15.34,45.5C8.26,45.5,2.5,39.74,2.5,32.66s5.76-12.84,12.84-12.84h1.31v8.37l-1.31,0c-2.47,0-4.47,2.01-4.47,4.47  c0,2.47,2.01,4.48,4.47,4.48c2.47,0,4.47-2.01,4.47-4.48l0-1.92v-15.4c0-7.08,5.76-12.84,12.84-12.84c7.08,0,12.84,5.76,12.84,12.84  s-5.76,12.84-12.84,12.84h-1.31v-8.37l1.31,0c2.47,0,4.47-2.01,4.47-4.47c0-2.47-2.01-4.47-4.47-4.47c-2.47,0-4.47,2.01-4.47,4.47  l0,1.92v15.4C28.18,39.74,22.42,45.5,15.34,45.5z"/>
//       </svg>
//     </a>
//     <button class="hamburger md:hidden w-6 h-6 bg-gray-100 text-gray-300">
//       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//       </svg>
//     </button>
//   </nav>
//   <main class="container bg-right-bottom bg-no-repeat bg-50% container flex flex-col flex-auto bg-red-200 justify-between"
//   style={{ backgroundImage: `url(${watermark})`}}>
//     <section class="main-content">
//       Some cards.
//     </section>
//     <div class="container flex-none flex flex-col justify-end h-64 bg-gradient-to-b from-transparent to-black">
//       <span>Here is some other  footer content</span>
//       <footer class="text-center bg-transparent">This is some copyright information.</footer>
//     </div>
//   </main>
// </div>
