import { clientRoutes } from "./client";
import { generateData } from "./dataGenerator";

import DateStore from "./date-store.js";
import DomainStore from "./domain-store.js";
import HabitDateStore from "./habit-date-store.js";
import HabitStore from "./habit-store.js";
import NodeStore from "./habit-node-store.js";

const basePath = "/demo?tracking_length=";
const daysToTrack = 5;

const importData = {
  init: function (length = daysToTrack) {
    return clientRoutes(basePath + String(length))
      .show_all()
      .then((response) => {
        DateStore.list(response.data.dates);
        DomainStore.list(response.data.domains);
        HabitDateStore.fullList(response.data.habit_dates);
        NodeStore.list(response.data.nodes);
        HabitStore.fullList(response.data.habits);
        DateStore.current(DateStore.list()[DateStore.list().length - 1]);
        DomainStore.current(DomainStore.list()[0]);

        HabitStore.runFilterByDomain(DomainStore.current().id);
        HabitStore.current(HabitStore.list()[0]);

        HabitDateStore.runFilter(HabitStore.current().id);
        HabitDateStore.current(
          HabitDateStore.list()[HabitDateStore.list().length - 1]
        );
        NodeStore.runCurrentFilterByHabit(HabitStore.current());
      })
      .catch((err) => {
        console.log("Failed importing demo data");
      });
  },
  populate: function (length = daysToTrack) {
    // Generate a random series of 'true'/'false' values for each domain
    HabitStore.runFilterByDomain(DomainStore.current().id);
    const leafNodeHabits = NodeStore.filterLeavesByMptt().map(
      (node) =>(HabitStore.list().filter(
          (habit) => habit.habit_node_id === +node.id
        )[0])
    );
    const dummyData = generateData(leafNodeHabits.length, daysToTrack);
    
    leafNodeHabits.forEach((habit) => {
      let dataset = dummyData.pop();
      Object.values(dataset).forEach((val, idx) => {
        // TODO serialise these values, pass to the backend to update in one go.

        // HabitDateStore.runUpdate(true, {
        //   habit_id: habit.id,
        //   date_id: DateStore.list()[idx].id,
        //   completed_status: val,
        // });
      });

    });
  }
};

export { importData };
