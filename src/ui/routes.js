import stream from "mithril/stream";
import MenuRoutes from "./menu-routes";

// Layout
import Layout from "./view/Layout.jsx";

// Models
import { importData } from "./store/populateDummyData";
import DomainStore from "./store/domain-store";
import HabitStore from "./store/habit-store";
import DateStore from "./store/date-store";
import NodeStore from "./store/habit-node-store";

// Components
import HeroSection from "./view/components/Layout/HeroSection.jsx";

// Utils
import { d3visPageMaker } from "./assets/scripts/d3-utilities";
import { handleErrorType } from "./assets/scripts/utilities";

const spinnerOpen = stream(true); 
const modalType = stream(false);

function populateStores({ demo }) {
  if (!demo) {
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
      .then(HabitStore.indexHabitsOfDomain)
      .catch((message) => {
        spinnerOpen(false);
        handleErrorType(message, "info");
      });
    
    let nodeLoad = NodeStore.index()
      .catch((err) => {
        handleErrorType(message, "info");
      });
    
    let dateLoad = DateStore.index()
      .then(m.redraw)
      .catch((err) => {
        handleErrorType(message, "info");
      });

    Promise.all([habitLoad, domainLoad, dateLoad, nodeLoad])
      .then(() => {
        m.redraw();
        spinnerOpen(false);
      })
      .catch((err) => {
        spinnerOpen(false);
        console.log(err, "Error loading data!");
      });
  } else {
    importData
      .init()
      .then(() => {
        spinnerOpen(false);
      })
      .then(m.redraw)
      .catch((err) => {
        spinnerOpen(false);
        m.redraw();
        console.log(err);
      });
  }
}

// Map MenuRoutes object to Mithril router objects with rendering functions
const Routes = MenuRoutes.reduce(
  (newRoutesObject, menuSection) => {
    const links = menuSection.subpaths;

    Object.keys(links).forEach((path) => {
      const { title, component } = links[path];
      newRoutesObject[path] = {
        onmatch: populateStores,
        render: () =>
          menuSection.label === "Visualise"
            ? m(d3visPageMaker(Layout, component, spinnerOpen, modalType), {
                heading: title,
              })
            : m({
                view: () =>
                  m(
                    Layout,
                    { spinnerState: spinnerOpen, modalType: modalType },
                    m(component, { modalType: modalType })
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
                spinnerState: spinnerOpen,
                index: true,
                modalType: modalType,
              },
              m(HeroSection, { modalType: modalType })
            ),
        }),
    },
  }
);

const DefaultRoute = "/";

export { Routes, DefaultRoute };
