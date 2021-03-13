import CreateForm from "./view/components/pages/forms/CreateForm.jsx";

// Pages
import HabitNodeList from "./view/components/pages/HabitNodeList.jsx";
import HabitTree from "./view/components/pages/visualisations/HabitTree.jsx";
import RadialTree from "./view/components/pages/visualisations/RadialTree.jsx";

const MenuRoutes = [
  // {
  //   label: "Objectives",
  //   subpaths: {
  //     "obj/list": {
  //       title: "List Objectives",
  //       description: "A flat list of all objectives for your perusal.",
  //       icon: "objective-completion",
  //     },
  //     "obj/new": {
  //       title: "Add Objective",
  //       description: "Create a completely blank objective.",
  //       icon: "objective-mountain",
  //     },
  //     "obj/edit": {
  //       title: "Compose Objective Habits",
  //       description:
  //         "Link existing behaviors to a new objective, or move habits from one objective to the other.",
  //       icon: "objective-compose",
  //     },
  //   },
  // },
  {
    label: "Habits",
    path: "/habits",
    subpaths: {
      "/habits/list": {
        title: "Habit Node List",
        description: "A flat list of all Habits for your perusal.",
        page: HabitNodeList,
      },
      "/habits/new": {
        title: "Create Form",
        description: "Create a completely blank habit.",
        page: CreateForm,
      },
      // "habits/edit": {
      //   title: "Link Habits",
      //   description:
      //     "Link existing behaviors to a new habit, or move habits from one Habit to the other.",
      //   page: CreateForm,
      // },
    },
  },
  {
    label: "Visualise",
    path: "/vis",
    subpaths: {
      "/vis/habit-tree": {
        title: "Habit Tree",
        description:
          "Traditional hierarchical Tree diagram showing habit nodes.",
        page: HabitTree,
      },
      // "vis/habit-triangle": {
      //   title: "Habit Triangle",
      //   description:
      //     "Fractal pyramid of habits. Navigate all the way up to the sky or drill down into the minutiae.",
      //   page: CreateFormup",
      // },
      // "vis/date-lines": {
      //   title: "Date Comparison",
      //   description:
      //     "See how your different habits have overlapped over time using this line diagram.",
      //   page: CreateFormchart",
      // },
      "/vis/radial-tree": {
        title: "Radial Tree",
        description:
          "A pretty hierarchical tree diagram where your habits branch off from the centre of a circle.",
        page: RadialTree,
      },
    },
  },
];

MenuRoutes["selected"] = "Habits"; // Default Page

export default MenuRoutes;
