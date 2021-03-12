// // Layouts
import Layout from "./view/Layout.jsx";

// Components
import HeroSection from "./view/components/layout/HeroSection.jsx";
import CreateForm from "./view/components/pages/forms/CreateForm.jsx";

// Pages
import HabitNodeList from "./view/components/pages/HabitNodeList.jsx";
import HabitTree from "./view/components/pages/visualisations/HabitTree.jsx";
import RadialTree from "./view/components/pages/visualisations/RadialTree.jsx";

// Utils
import { d3visPageMaker } from "./assets/scripts/utilities";

const Routes = {
  "/": {
    render: function () {
      return m(Layout, { index: true }, m(HeroSection));
    },
  },
  "/habits/list": {
    render: function () {
      return m(
        Layout,
        m(HabitNodeList, { heading: "The List of Habit Nodes!" })
      );
    },
  },
  "/habits/new": {
    render: function () {
      return m(Layout, m(CreateForm));
    },
  },
  "/vis/habit-tree": {
    render: function () {
      return m(d3visPageMaker(Layout, HabitTree));
    },
  },
  "/vis/radial-tree": {
    render: function () {
      return m(d3visPageMaker(Layout, RadialTree));
    },
  },
};

const DefaultRoute = "/";

export { Routes, DefaultRoute };
