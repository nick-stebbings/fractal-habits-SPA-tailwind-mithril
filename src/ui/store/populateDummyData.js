import stream from "mithril/stream";
import { clientRoutes } from "./client";

import DateStore from "./date-store.js";
import DomainStore from "./domain-store.js";
import HabitDateStore from "./habit-date-store.js";
import HabitStore from "./habit-store.js";
import NodeStore from "./habit-node-store.js";
import TreeStore from "./habit-tree-store";

const basePath = "/demo?tracking_length=";
const daysToTrack = 280;

const cache = stream([]);
// cache().length === 0 && TODO
const importData = {
  init: function (length = daysToTrack) {
    return clientRoutes(basePath + String(length))
      .show_all()
      .then((response) => {
        DateStore.list(response.data.dates);
        DomainStore.list(response.data.domains);
        HabitDateStore.list(response.data.habit_dates);
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
        NodeStore.runFilter(HabitStore.current().id);
        NodeStore.current(NodeStore.list()[NodeStore.list().length - 1]);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};

export { importData, cache };
