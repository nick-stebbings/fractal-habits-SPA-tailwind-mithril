// MegaMenu Routes
import MenuRoutes from "./menu-routes";
// Layouts
import Layout from "./view/Layout.jsx";
// Models
import DomainStore from "./store/domain-store";
// Components
import HeroSection from "./view/components/layout/HeroSection.jsx";
// Utils
import { d3visPageMaker } from "./assets/scripts/utilities";

const Routes = MenuRoutes.reduce(
  (newRoutesObject, menuSection) => {
    let links = menuSection.subpaths;

    Object.keys(links).forEach((path) => {
      let title = links[path]["title"];
      let page = links[path]["page"];
      newRoutesObject[path] = {
        render: () =>
          menuSection["label"] === "Visualise"
            ? m(d3visPageMaker(Layout, page), {
                heading: title,
              })
            : m(Layout, m(page), {
                heading: title,
              }),
      };
    });

    return newRoutesObject;
  },
  {
    "/": {
      onmatch: function () {
        DomainStore.index()
          .then(() => {
            m.redraw();
          });
      },
      render: function () {
        return m(Layout, { index: true }, m(HeroSection));
      },
    },
  }
);

const DefaultRoute = "/";

export { Routes, DefaultRoute };
