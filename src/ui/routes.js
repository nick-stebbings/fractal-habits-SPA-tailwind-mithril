// MegaMenu Routes
import MenuRoutes from './menu-routes';
// Layouts
import Layout from './view/Layout.jsx';
// Models
import {importData, displayDemoData} from './store/populateDummyData';
import DomainStore from './store/domain-store';
import HabitDateStore from './store/habit-date-store';
import HabitStore from './store/habit-store';
import DateStore from './store/date-store';
import NodeStore from './store/habit-node-store';
// Components
import HeroSection from './view/components/layout/HeroSection.jsx';
// Utils
import { d3visPageMaker, redraw, handleErrorType } from './assets/scripts/utilities';

function populateStores({demo}) {
  if (!demo) {
    HabitStore.index()
    .then(DomainStore.index) // Maybe do this selectively in future
    .then((domain) => HabitStore.indexHabitsOfDomain(domain.id))
    .then(DateStore.index)
    .then(redraw)
    .catch(handleErrorType);
  } else {
    importData
      .init()
      .then(m.redraw)
      .then(() => {
        console.log(HabitDateStore.list(), 'FROM ROUTES hab c l');
        console.log(HabitDateStore.current(), 'FROM ROUTES hab c l');
        console.log(HabitStore.list(), 'FROM ROUTES hab c l');
        console.log(HabitStore.fullList(), 'FROM ROUTES hab c l');
        console.log(HabitStore.current(), 'FROM ROUTES hab c l');
      })
      .catch((err) => console.log(err));
  }
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
