import stream from "mithril/stream";
import { handleErrorType } from "./client";
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

  submit: () => {
    HabitDateStore.create()
      .then(() => {
        Flash.success("Note created.");
        // This could be optimized instead of reloading.
        HabitDateStore.load();
        HabitDateStore.clear();
      })
      .catch((err) => {
        // Flash.warning(err.response.message);
      });
  },

  runFilter: (habitId) =>
    HabitDateStore.list(
      HabitDateStore.list().filter((habitDate) => habitDate.habit_id == habitId)
    ),

  runUpdate: (id, value) => {
    HabitDateStore.upHabitdate(id, value).catch((e) => {
      // Flash.warning("Could not upHabitdate note: " + e.response.message);
    });
  },

  runDelete: (id) => {
    HabitDateStore.delete(id)
      .then(() => {
        Flash.success("Note deleted.");
        HabitDateStore.list = HabitDateStore.list.filter((i) => i.id !== id);
      })
      .catch(handleErrorType);
  },
};

export default HabitDateStore;
