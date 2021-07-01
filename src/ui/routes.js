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

// Copy
let cardCopy = [
  {
    title: "Everyone Loves a Streak",
    short:
      "If you know the satisfaction of completing a list, or marking off a running streak, you know the satisfaction from a sense  completion.",
    long: [
      "HabitFract seeks to channel our minds' in-built completion-satisfaction mechanism to drive behavioural change.",
      "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
    ]
  },
  {
    title: "Everyone Loves a Streak",
    short:
      "If you know the satisfaction of completing a list, or marking off a running streak, you know the satisfaction from a sense  completion.",
    long: [
      "HabitFract seeks to channel our minds' in-built completion-satisfaction mechanism to drive behavioural change.",
      "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
    ]
  },
  {
    title: "Everyone Loves a Streak",
    short:
      "If you know the satisfaction of completing a list, or marking off a running streak, you know the satisfaction from a sense  completion.",
    long: [
      "HabitFract seeks to channel our minds' in-built completion-satisfaction mechanism to drive behavioural change.",
      "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
    ]
  },
  {
    title: "Everyone Loves a Streak",
    short:
      "If you know the satisfaction of completing a list, or marking off a running streak, you know the satisfaction from a sense  completion.",
    long: [
      "HabitFract seeks to channel our minds' in-built completion-satisfaction mechanism to drive behavioural change.",
      "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
    ]
  },
  {
    title: "Everyone Loves a Streak",
    short:
      "If you know the satisfaction of completing a list, or marking off a running streak, you know the satisfaction from a sense  completion.",
    long: [
      "HabitFract seeks to channel our minds' in-built completion-satisfaction mechanism to drive behavioural change.",
      "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
    ]
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
                  "Choose a life domain:"
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
