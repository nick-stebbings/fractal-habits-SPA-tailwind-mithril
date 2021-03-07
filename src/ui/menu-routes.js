const Routes = [
  {
    label: "Objectives",
    hrefs: {
      "obj/list": {
        title: "List Objectives",
        description: "A flat list of all objectives for your perusal.",
        icon: "objective-completion",
      },
      "obj/new": {
        title: "Add Objective",
        description: "Create a completely blank objective.",
        icon: "objective-mountain",
      },
      "obj/edit": {
        title: "Compose Objective Habits",
        description:
          "Link existing behaviors to a new objective, or move habits from one objective to the other.",
        icon: "objective-compose",
      },
    },
  },
  {
    label: "Habits",
    hrefs: {
      "habits/list": {
        title: "List Habits",
        description: "A flat list of all Habits for your perusal.",
        icon: "fa-tree",
      },
      "habits/new": {
        title: "Add Habit",
        description: "Create a completely blank habit.",
        icon: "fa-tree",
      },
      "habits/edit": {
        title: "Link Habits",
        description:
          "Link existing behaviors to a new habit, or move habits from one Habit to the other.",
        icon: "fa-tree",
      },
    },
  },
  {
    label: "Visualise",
    hrefs: {
      "vis/habit-tree": {
        title: "Habit Tree",
        description:
          "Traditional hierarchical Tree diagram showing habit nodes.",
        icon: "fa-tree",
      },
      "vis/habit-triangle": {
        title: "Habit Triangle",
        description:
          "Fractal pyramid of habits. Navigate all the way up to the sky or drill down into the minutiae.",
        icon: "fa-caret-up",
      },
      "vis/date-lines": {
        title: "Date Comparison",
        description:
          "See how your different habits have overlapped over time using this line diagram.",
        icon: "fa-line-chart",
      },
      "vis/radial-tree": {
        title: "Radial Tree",
        description:
          "A pretty hierarchical tree diagram where your habits branch off from the centre of a circle.",
        icon: "fa-pagelines",
      },
    },
  },
];

Routes["selected"] = "Habits"; // Default Page

export default Routes;
