// MegaMenu Routes
import MenuRoutes from './menu-routes';
// Layouts
import Layout from './view/Layout.jsx';
// Models
import {importData, displayDemoData} from './store/populateDummyData';
import DomainStore from './store/domain-store';
// import HabitStore from './store/habit-store';
import DateStore from './store/date-store';
// Components
import HeroSection from './view/components/layout/HeroSection.jsx';
// Utils
import { d3visPageMaker, redraw, handleErrorType } from './assets/scripts/utilities';

function populateStores({demo}) {
  // if (!demo) {
    DomainStore.index()
    .then(DateStore.index) //TODO filter by habit, refactor this
    .then(DomainStore.indexHabitsOf)
    .then(redraw)
    .catch(handleErrorType);
  // } else {
    // displayDemoData().catch(handleErrorType);
  // }
};

const Routes = MenuRoutes.reduce(
  (newRoutesObject, menuSection) => {
    const links = menuSection.subpaths;

    Object.keys(links).forEach((path) => {
      const { title, page } = links[path];
      newRoutesObject[path] = {
        onmatch: populateStores,
        render: () => (menuSection.label === 'Visualise'
          ? m(d3visPageMaker(Layout, page), {
            heading: title,
          })
          : m(Layout, m(page, {
            heading: title,
          }))),
      };
    });

    return newRoutesObject;
  },
  {
    '/': {
      onmatch: populateStores,
      render() {
        return m(Layout, { index: true }, m(HeroSection));
      },
    },
  },
);

const DefaultRoute = '/';

export { Routes, DefaultRoute };
