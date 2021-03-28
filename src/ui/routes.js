// MegaMenu Routes
import MenuRoutes from './menu-routes';
// Layouts
import Layout from './view/Layout.jsx';
// Models
import DomainStore from './store/domain-store';
// import HabitStore from './store/habit-store';
import DateStore from './store/date-store';
// Components
import HeroSection from './view/components/layout/HeroSection.jsx';
// Utils
import { d3visPageMaker, redraw, handleErrorType } from './assets/scripts/utilities';

const Routes = MenuRoutes.reduce(
  (newRoutesObject, menuSection) => {
    const links = menuSection.subpaths;

    Object.keys(links).forEach((path) => {
      const { title, page } = links[path];
      newRoutesObject[path] = {
        onmatch({demo}) {
            if (!demo) { 
              DomainStore.index()
                .then(DateStore.index) //TODO filter by habit
                .then(DomainStore.indexHabitsOf)
                .then(redraw)
                .catch(handleErrorType)
            }
        },
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
      onmatch() {
        // DomainStore.index()
        //   .then(() => {
        //     HabitStore.index().then(() => {
        //       m.redraw();
        //     });
        //   });
      },
      render() {
        return m(Layout, { index: true }, m(HeroSection));
      },
    },
  },
);

const DefaultRoute = '/';

export { Routes, DefaultRoute };
