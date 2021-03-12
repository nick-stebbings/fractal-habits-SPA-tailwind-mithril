// MegaMenu Routes
import MenuRoutes from "./menu-routes";
// Layouts
import Layout from "./view/Layout.jsx";
// Components
import HeroSection from "./view/components/layout/HeroSection.jsx";
// Utils
import { d3visPageMaker } from "./assets/scripts/utilities";

const Routes = MenuRoutes.reduce(
  (newRoutes, menuSection) => {
    let links = menuSection.hrefs;

    Object.keys(links).forEach((path) => {
      let title = links[path]["title"];
      let page = links[path]["page"];
      newRoutes[path] = {
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

    return newRoutes;
  },
  {
    "/": {
      render: function () {
        return m(Layout, { index: true }, m(HeroSection));
      },
    },
  }
);

const DefaultRoute = "/vis/habit-tree";

export { Routes, DefaultRoute };
