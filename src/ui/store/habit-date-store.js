import stream from "mithril/stream";
import { clientRoutes, handleErrorType } from "./client";

function log(res) {
  console.log(res, "LOGGER");
  return res;
}

const basePath = "/habit_dates";

var HabitDateStore = Object.assign(clientRoutes(basePath), {
  current: stream({}),

  clear: () => {
    HabitDateStore.current = stream({});
  },

  list: stream([]),

  index: () =>
    HabitDateStore.show_all()
      .then(log)
      .then((response) => JSON.parse(response.data).habit_dates)
      .then(HabitDateStore.list)
      .catch(handleErrorType),

  submit: (attrs) => {
    HabitDateStore.create(attrs)
      .then(HabitDateStore.current)
      .catch(handleErrorType);
  },

  runFilter: (habitId) =>
    HabitDateStore.list(
      HabitDateStore.list().filter((habitDate) => habitDate.habit_id == habitId)
    ),

  runUpdate: (id, value) => {
    HabitDateStore.replace(id, value)
      .then(HabitDateStore.current)
      .catch(handleErrorType);
  },
});

export default HabitDateStore;
