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
        icon:
          '<svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" class="stroke-current" viewBox="0 0 24 24"><defs><style>.cls-1{fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;}</style></defs><title/><path class="cls-1" d="M8.79,11.93l3.82-6.48a.76.76,0,0,1,1.44,0l9,15.21"/><path class="cls-1" d="M11.05,16l1.42-1.43a1.21,1.21,0,0,1,1.71,0l1.92,1.92a1.21,1.21,0,0,0,1.71,0L19.37,15"/><path class="cls-1" d="M1,20.66l4.85-8.24c.21-.37.56-.37.78,0l4.85,8.24"/><path class="cls-1" d="M3,17.57l.85.85a.65.65,0,0,0,.93,0l1-1a.66.66,0,0,1,.92,0l1,1a.65.65,0,0,0,.93,0l.84-.85"/><path class="cls-1" d="M8.45,6.34a1.22,1.22,0,0,0-1,1.38"/><path class="cls-1" d="M7.42,7.72A1.21,1.21,0,0,0,6,6.7"/><path class="cls-1" d="M5.45,3.34a1.22,1.22,0,0,0-1,1.38"/><path class="cls-1" d="M4.42,4.72A1.21,1.21,0,0,0,3,3.7"/></svg>',
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
