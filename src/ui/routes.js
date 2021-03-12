// // Layouts
import Layout from "./view/Layout.jsx";

// // Individual Component Pages
import CreateForm from "./view/components/pages/forms/CreateForm.jsx";

import HabitNodeList from "./view/components/pages/HabitNodeList.jsx";
import HabitTree from "./view/components/pages/visualisations/HabitTree.jsx";
import RadialTree from "./view/components/pages/visualisations/RadialTree.jsx";

// Libraries
import { d3visPageMaker } from "./assets/scripts/utilities";

const Routes = {
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

const DefaultRoute = "/habits/list";

export { Routes, DefaultRoute };
