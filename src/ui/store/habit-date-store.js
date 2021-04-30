import stream from "mithril/stream";
import { clientRoutes, handleErrorType } from "./client";

const basePath = "/habit_dates";

var HabitDateStore = Object.assign(clientRoutes(basePath), {
  current: stream({}),

  clear: () => {
    HabitDateStore.current = stream({});
  },

  list: stream([]),
  fullList: stream([]),

  index: () =>
    HabitDateStore.show_all()
      .then((response) => JSON.parse(response.data).habit_dates)
      .then(HabitDateStore.fullList)
      .catch(handleErrorType),

  submit: (attrs) => {
    HabitDateStore.create(attrs)
      .then(HabitDateStore.current)
      .catch(handleErrorType);
  },

  filterListByHabitId: (habitId) =>
    HabitDateStore.fullList().filter(
      (habitDate) => habitDate.habit_id == +habitId
    ),

  runFilter: (habitId) =>
    HabitDateStore.list(HabitDateStore.filterListByHabitId(habitId)),

  runDateFilterOnCurrentList: (dateId) =>
    HabitDateStore.list(
      HabitDateStore.list().filter((habitDate) => habitDate.date_id === +dateId)
    ),

  runUpdate: (isDemo, values, domainId) => {
    const payload = JSON.stringify(values);
    return (isDemo
      ? clientRoutes(
          `/demo/domains/${domainId}/habit_dates/${values.date_id}`
        ).replace("", payload)
      : HabitDateStore.replace("", payload)
    )
      .then(HabitDateStore.current)
      .catch(handleErrorType);
  },
});

export default HabitDateStore;
