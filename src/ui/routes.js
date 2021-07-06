import stream from "mithril/stream";
import MenuRoutes from "./menu-routes";

// Layout
import Layout from "./view/Layout.jsx";

// Models
import { importData } from "./store/populateDummyData";
import DomainStore from "./store/domain-store";
import HabitStore from "./store/habit-store";
import HabitDateStore from "./store/habit-date-store";
import DateStore from "./store/date-store";
import NodeStore from "./store/habit-node-store";

// Components
import PillSection from "./view/components/Layout/PillSection.jsx";
import LogoSection from "./view/components/Layout/LogoSection.jsx";
import SloganSection from "./view/components/Layout/SloganSection.jsx";
import FeatureCardSection from "./view/components/Layout/FeatureCardSection.jsx";

// Utils
import { handleErrorType } from "./assets/scripts/utilities";
import { registerEventListeners } from "./assets/scripts/animations.js";

// Photo Urls
import womanJournalling from "./assets/images/photos/journalling-person.jpg";
import manReadingAtomicHabits from "./assets/images/photos/man-reading-james-clear.jpg";
import longRoad from "./assets/images/photos/long-road.jpg";
import fernLeaf from "./assets/images/photos/fern-leaf.jpg";
import snail from "./assets/images/photos/snail.jpg";

// Copy
let cardCopy = [
  {
    title: "Everyone Loves a Streak",
    short:
      "HabitFract seeks to channel our minds' in-built completion-satisfaction mechanism to drive behavioural change.",
    long: [
      "If you know the satisfaction of completing a list, or marking off a running streak, you know that feeling of a job well done, and how it can motivate.",
      "<blockquote>Habit formation is a long race. It often takes time for the desired results to appear. And while you are waiting for the long-term rewards of your efforts to accumulate, you need a reason to stick with it in the short-term. You need some immediate feedback that shows you are on the right path.</blockquote><figcaption><a target='_blank' href='https://jamesclear.com/habit-tracker'>James Clear - author of 'Atomic Habits'</a></figcaption>",
      `<figure class='my-3 object-cover'><img src=${womanJournalling} alt='Woman writing in a journal' /><figcaption>Photo by <a target='_blank' href='https://unsplash.com/@ana_tavares?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Ana Tavares</a> on <a target='_blank' href='https://unsplash.com/collections/3737173/holos-habit-website?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Unsplash</a></figcaption></figure>`,
      "By marking off something that we do every day, we are creating a personal contract, one that gets stronger as time goes on. <em>HabitFract</em> helps keep the habit streak going, and helps you to use atomic habits as the building blocks for change.",
      "<figcaption>Background Photo by <a target='_blank' href='https://unsplash.com/@prophsee?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Prophsee Journals</a> on <a target='_blank' href='https://unsplash.com/s/photos/habit?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Unsplash</a></figcaption>",
    ],
  },
  {
    title: "Use Metrics to Build Habit Momentum",
    short:
      "Do something once and it's an event. Do it many times and you're on a roll. Build bigger habit structures by completing small actions every day.",
    long: [
      "Once you get into the idea of consistency over quantity, start stacking habits, even of the smallest magnitude, and you'll be accumulating the 'compound interest of self improvement'.",
      `<figure class='my-3 object-cover'><img src=${manReadingAtomicHabits} alt='Man reading Atomic Habits by James Clear' /><figcaption>Photo by <a target='_blank' href='https://unsplash.com/@nublson?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Nubelson Fernandes</a> on <a target='_blank' href='https://unsplash.com/s/photos/habit?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Unsplash</a></figcaption></figure>`,
      "<blockquote>If you can get 1 percent better each day for one year, you’ll end up thirty-seven times better by the time you’re done</blockquote><figcaption><a target='_blank' href=https://jamesclear.com/continuous-improvement'>James Clear - author of 'Atomic Habits'</a></figcaption>",
      "Not only is this an effective mechanism for change, it reminds you that the path to achieving grand objectives begins with your day-to-day actions.",
    ],
  },
  {
    title: "Stack Habits... to Infinity!",
    short:
      "Where do you see yourself in 10 years? What a nebulous question. Concentrate on the now and you'll know the sky is the limit.",
    long: [
      "<br/><blockquote>A journey of a thousand miles begins with a single step.</blockquote><figcaption>Old Chinese proverb</figcaption>",
      "But what does a single step begin with? What if you can barely walk to begin with?<br/><br/>",
      "<blockquote>How long is a piece of string?<br />Twice the distance from the middle to then end.</blockquote><figcaption>Old Grandad joke</figcaption>",
      `<figure class='my-3 object-cover'><img src=${longRoad} alt='Long Straight Road in Autumn' /><figcaption>Photo by <a target='_blank' href='https://unsplash.com/@impatrickt?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Patrick Tomasso</a> on <a href='https://unsplash.com/s/photos/journey?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Unsplash</a>
  </figcaption></figure>`,
      "Build up from <em>'Think of a business idea'</em>, right up to <em>'Float on the stock exchange'</em>.",
      "Break down <em>'Run a marathon'</em> right down to <em>'Tie my shoelaces'</em>. Then keep stacking habits...",
      "...because we don't always know where we are headed.",
    ],
  },
  {
    title: "Use The Power of the Mimic",
    short:
      "Be like the 🐌 & you'll float like a ☁️. i.e. If you learn how to inhabit a fractal structure in your behaviour, then you can learn how to scale - like, (ahem) - a snail. A 🐌's spiral shell is the same shape as a galaxy 🌌",
    long: [
      "Did you know that the tallest tree fern in the world is 20m in height - another natural fractal wonder, just like the snail!",
      "By recreating the same strucure and shape at greater and greater magnitudes, the sky really is the limit.",
      `<figure class='my-3 object-cover'><img src=${fernLeaf} alt='Fern leaf showing a fractal structure' /><figcaption>Photo by <a target='_blank' href='https://unsplash.com/@olenkasergienko?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Olena Sergienko</a> on <a target='_blank' href='https://unsplash.com/s/photos/fern?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Unsplash</a>
  </figcaption></figure>`,
      "<blockquote>The true power of fractals lies in the fact that their complexity comes from a few simple actions done over and over again</blockquote><figcaption><a target='_blank' href='https://www.linkedin.com/pulse/one-simple-habit-20-being-fractal-deepa-d-souza'>Deepa D'souza - entrepeneur</a></figcaption>",
      "Build up hierarchies of habits, with no limit on the top or the bottom. By arranging and tracking your behaviour in such a way, you can create a streak of massive proportions (for some, streaking itself is an ambition).",
    ],
  },

  {
    title: "Visualise the Tree to Grow Tall, Strong, and Mighty",
    short:
      "Learn from the behaviour of others by first visualising their patterns, then emulating them in your own way.",
    long: [
      "<br /><blockquote>Most people are other people. Their thoughts are someone else's opinions, their lives a mimicry, their passions a quotation.</blockquote><figcaption>Oscar Wilde</figcaption>",
      "Not me. Well... maybe I was a little inspired by <a target='_blank' href='https://workflowy.com/list-maker/'>Workflowy</a>.",
      "We all need a little inspiration from others sometimes. If you are not sure where to start with building your habits, <em>HabitFract</em> allows you to load a full set of DEMO habits.",
      "By switching data source to this DEMO data, you can start to navigate the behavioural structure of other people, or copy the habits of organisations and businesses. We learn by mimicry, so if someone is allowing you to copy, why not? I envision a type of social network where we can learn directly from each other's actions.",
      `<figure class='my-3 object-cover'><img src=${snail} alt='Snail looking blankly' class="mx-auto" /><figcaption><a target='_blank' href='https://unsplash.com/@tumbao1949?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>James Wainscoat</a> on <a href='https://unsplash.com/s/photos/snail?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Unsplash</a></figcaption></figure>`,
      "For now, the demo data is populated by information scraped from <a target='_blank' href= https://www.wikihow.com/Main-Page'>wikiHow</a>, taking 5 life-domains and copying instructions for various habits.",
      "You can use this to explore the power of the visualisation tools of <em>HabitFract</em>. Click <a href='#!/?demo=true'>HERE</a> to switch to the demo version, but be sure to do a full reload on your device once you have switched data sources.<br/>",
    ],
  },
];

const spinnerState = stream(true); 
const visSpinnerComponent = stream({ view: () => m("p", "Loading") }); 
const modalType = stream(false);

const d3visPageMaker = function (layout, component, spinnerState, modalType) {
  const page = {};

  // Create a visualisation-containing div element with random ID
  const divId = `svg_container_${Math.floor(Math.random() * 1000000000)}${1}`;

  page.view = () => {
    // Pass unique selection id to the vis component for d3 selection
    const d3Container = m("div", { id: divId }, [
      m("svg.legendSvg", { class: "bottom-1 w-36 fixed left-4 h-12" }),
      m("svg.controlsSvg", {
        class: "bottom-2 fixed right-0 h-14 hidden md:block"
      }),
    ]);

    return m(
      layout,
      { spinnerState, modalType },
      m(component, { divId, modalType }, d3Container)
    );
  };
  return page;
};

function populateStores({demo}) {
  if (!demo) {
    console.log(
      HabitStore.current()?.name == "Select a Life-Domain to start tracking"
        ? "Habits Indexed"
        : "Habits loaded from the Store"
    );
    let habitLoad = (HabitStore.current()?.name == "Select a Life-Domain to start tracking" // If we still have default habit data
    ? HabitStore.index()
    : Promise.resolve(HabitStore.fullList())
    )
      .then((habits) => {
        return new Promise((resolve, reject) => {
            habits.length !== 0
              ? resolve(habits)
              : reject("There are no habits to load, yet!");
          })}
        )
        .catch((message) => {
          handleErrorType(message, "info");
        });

    console.log(DomainStore.current()?.name == "No Domains Registered" ? 'Domains Indexed' : 'Domains loaded from the Store');
    let domainLoad = (DomainStore.current()?.name == "No Domains Registered" // If we still have default domain data
      ? DomainStore.index()
      : Promise.resolve(DomainStore.list())
    )
      .then((domains) => {
        return new Promise((resolve, reject) => {
          domains.length !== 0
            ? resolve(DomainStore.current().id)
            : reject("There are no domain yet!");
        });
      })
      .catch((message) => {
        handleErrorType(message, "info");
      });
    
    let nodeLoad = NodeStore.index()
      .catch((err) => {
        handleErrorType(message, "info");
      });
    
    let dateLoad = DateStore.index()
      .catch((err) => {
        handleErrorType(message, "info");
      });

    let habitDateLoad = HabitDateStore.index()
      .catch((err) => {
        handleErrorType(message, "info");
      });

    Promise.all([habitLoad, domainLoad, dateLoad, nodeLoad, habitDateLoad])
      .then(() => {
        HabitStore.indexHabitsOfDomain(DomainStore.current().id);
        HabitDateStore.filterListByHabitId(HabitStore.current().id);
        console.log('Full reload of data')
        m.redraw();
        spinnerState(false);
      })
      .catch((err) => {
        DateStore.clear()
        spinnerState(false);
        console.log(err, "Error loading data!");
      });
  } else {
    // Load Demo data
    importData
      .init()
      .then(() => {
        spinnerState(false);
      })
      .then(m.redraw)
      .catch((err) => {
        spinnerState(false);
        m.redraw();
        console.log(err);
      });
  }
};

// Map MenuRoutes object -> Mithril router objects with rendering functions
const Routes = MenuRoutes.reduce(
  (newRoutesObject, menuSection) => {
    const links = menuSection.subpaths;

    Object.keys(links).forEach((path) => {
      const { title, component } = links[path];
      newRoutesObject[path] = {
        onmatch: function (vnode) {
          populateStores(vnode);
          return menuSection.label === "Visualise"
            ? import(
                /* webpackChunkName: "HabitTree" */ "./view/pages/HabitTree.jsx"
              )
                .then(({ default: HabitTree }) => {
                  visSpinnerComponent(HabitTree);
                })
                .catch(console.log)
            : null;
        },
        render: (e) =>
          menuSection.label === "Visualise"
            ? m(
                d3visPageMaker(
                  Layout,
                  visSpinnerComponent(),
                  spinnerState,
                  modalType
                ),
                {
                  heading: title,
                }
              )
            : m({
                view: () =>
                  m(
                    Layout,
                    { spinnerState, modalType },
                    m(component, { modalType })
                  ),
              }),
      };
    });

    return newRoutesObject;
  },
  // Index Route:
  {
    "/": {
      onmatch: populateStores,
      render: () =>
        m({
          view: () =>
            m(
              Layout,
              {
                spinnerState: spinnerState,
                isIndex: true,
                modalType: modalType,
              },
              [
                m(LogoSection),
                m(SloganSection),
                m(
                  "div",
                  { class: m.route.param("demo") ? "cta-header hidden " : "cta-header" },
                  "Choose a life domain ..."
                ),
                m(PillSection, {
                  modalType: modalType,
                  pillTitles: ["Spirituality", "Mental Health", "Giving"],
                }),
                m(FeatureCardSection, { cardCopy }),
              ]
            ),
        }),
    },
  }
);

const DefaultRoute = "/";

export { Routes, DefaultRoute, populateStores };
