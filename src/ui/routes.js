import stream from "mithril/stream";
// MegaMenu Routes
import MenuRoutes from "./menu-routes";
// Layouts
import Layout from "./view/Layout.jsx";
// Models
import { importData, displayDemoData } from "./store/populateDummyData";
import DomainStore from "./store/domain-store";
import HabitStore from "./store/habit-store";
import DateStore from "./store/date-store";
import TreeStore from "./store/habit-tree-store";
// Components
import HeroSection from "./view/components/layout/HeroSection.jsx";
// Utils
import {
  d3visPageMaker,
  redraw,
  handleErrorType,
} from "./assets/scripts/utilities";

const spinnerOpen = stream(true);

function populateStores({ demo }) {
  if (!demo) {
    HabitStore.index()
      .then(DomainStore.index)
      .then((domains) => {
        if (domains.length !== 0 && (HabitStore.fullList().length > 0)) {
          return HabitStore.indexHabitsOfDomain(domains[0].id).then(DateStore.index)
        }
        throw Error;
      })
      .then(() => {
        spinnerOpen(false);
      })
      .then(redraw)
      .catch((err) => {console.log(err)});
  } else {
    importData.init()
    .then(() => {
      spinnerOpen(false)
    }).then(m.redraw).catch(handleErrorType);
  }
}

const Routes = MenuRoutes.reduce(
  (newRoutesObject, menuSection) => {
    const links = menuSection.subpaths;

    Object.keys(links).forEach((path) => {
      const { title, page } = links[path];
      newRoutesObject[path] = {
        onmatch: populateStores,
        render: () =>
          menuSection.label === "Visualise"
            ? m(d3visPageMaker(Layout, page, spinnerOpen), {
                heading: title
              })
            : m(
                Layout,
                { spinnerState: spinnerOpen },
                m(page, {
                  heading: title,
                })
              ),
      };
    });

    return newRoutesObject;
  },
  {
    "/": {
      onmatch: populateStores,
      render() {
        return m(Layout, { spinnerState: spinnerOpen, index: true }, m(HeroSection));
      },
    },
  }
);

const DefaultRoute = "/";

export { Routes, DefaultRoute };
