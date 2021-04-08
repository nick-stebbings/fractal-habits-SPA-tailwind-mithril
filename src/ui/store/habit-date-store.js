import stream from "mithril/stream";
import { clientRoutes, handleErrorType } from "./client";

const basePath = "/habit_dates";

var HabitDateStore = Object.assign(clientRoutes(basePath), {
  current: stream({}),

  clear: () => {
    HabitDateStore.current = stream({});
  },

  list: stream([]),

  index: () =>
    HabitDateStore.show_all()
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

  runUpdate: (isDemo, values) => {
    (isDemo
      ? clientRoutes("/demo/habit_dates").replace("", values)
      : HabitDateStore.replace("", values)
    )
      .then(HabitDateStore.current)
      .catch(handleErrorType);
  },
});

export default HabitDateStore;
