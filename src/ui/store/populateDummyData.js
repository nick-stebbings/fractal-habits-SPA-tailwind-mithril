import stream from "mithril/stream";
import { clientRoutes, handleErrorType } from "./client";


import DateStore from "./date-store.js";
import DomainStore from "./domain-store.js";
import HabitDateStore from "./habit-date-store.js";
import HabitStore from "./habit-store.js";
import NodeStore from "./habit-node-store.js";

const basePath = "/demo";

const importData = clientRoutes(basePath).show_all()
  .then((response) => {
    DateStore.list(response.data.dates)
    DomainStore.list(response.data.domains)
    HabitDateStore.list(response.data.habit_dates)
    HabitStore.list(response.data.habits)
    NodeStore.list(response.data.nodes)

    DateStore.current(DateStore.list[DateStore.list.length - 1])
    DomainStore.current(DomainStore.list[0])
    HabitDateStore.current(HabitDateStore.list[HabitDateStore.list.length - 1])
    HabitStore.current(HabitStore.list[0])
    NodeStore.current(NodeStore.list[NodeStore.list.length - 1])
  })
  .catch(handleErrorType);

export default {importData};
