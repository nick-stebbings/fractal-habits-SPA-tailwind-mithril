import stream from "mithril/stream";
import { clientRoutes, handleErrorType } from "./client";
import DateTime from 'luxon/src/datetime.js';
import HabitDateStore from "./habit-date-store";

const basePath = "/habits";

const HabitStore = Object.assign(clientRoutes(basePath), {
  current: stream({ name: "Select a Life-Domain to start tracking", id: 1 }),

  get: (id) =>
    HabitStore.show_one(id)
      .then((response) => JSON.parse(response.data))
      .then(HabitStore.current)
      .catch(handleErrorType),

  clear: () => {
    HabitStore.current({
      name: "Select a Life-Domain to start tracking",
      id: 1,
    });
  },
  noHabitMessage: () => ({
    name: "There are no habits yet for this domain",
    id: 1,
  }),

  list: stream([]),
  fullList: stream([]),

  index: () =>
    HabitStore.show_all()
      .then((response) => JSON.parse(response.data).habits)
      .then((habits) => {
        if (habits.length !== 0) {
          let list = HabitStore.fullList(habits);
          HabitStore.sortByDate(true);
          HabitStore.current(list[list.length - 1]);
          return list;
        }
        return HabitStore.fullList();
      })
      .catch(handleErrorType),

  fetchIndexHabitsOfDomain: (id) =>
    clientRoutes(`${basePath}/${id}/habits`)
      .show_all()
      .then((response) => JSON.parse(response.data).habits)
      .then(HabitStore.list)
      .then((list) => HabitStore.current(list[list.length - 1]))
      .then(log)
      .catch(handleErrorType),

  indexHabitsOfDomain: (id, resetCurrent = false) => {
    HabitStore.runFilterByDomain(+id);
    const replacementCurrentHabit =
      HabitStore.list().length == 0
        ? HabitStore.noHabitMessage()
        : HabitStore.list()[HabitStore.list().length - 1];
    if (resetCurrent) HabitStore.current(replacementCurrentHabit);
    HabitStore.sortByDate();
  },

  filterByDomainId: (id) => {
    return HabitStore.fullList().filter((habit) => habit.domain_id === +id)
  },

  filterById: (id) => HabitStore.fullList().filter((habit) => habit.id === +id),

  filterByName: (filterString) =>
    HabitStore.list().filter((habit) =>
      habit.name.match(new RegExp(filterString, "i"))
    ),

  sortByName: (asc = true) =>
    HabitStore.list(
      HabitStore.list().sort((habitA, habitB) =>
        asc
          ? habitA.name.localeCompare(habitB.name)
          : habitB.name.localeCompare(habitA.name)
      )
    ),

  sortByDate: (asc = true) =>
    HabitStore.list(
      HabitStore.list().sort((habitA, habitB) =>
        asc
          ? DateTime.fromSQL(habitA.initiation_date).ts -
            DateTime.fromSQL(habitB.initiation_date).ts
          : +(
              DateTime.fromSQL(habitB.initiation_date).ts -
              DateTime.fromSQL(habitA.initiation_date).ts
            )
      )
    ),

  getHabitStatusForHabitDateList: (habit) =>
    HabitDateStore.filterListByHabitId(habit.id)[0]?.completed_status,

  sortByStatus: (asc = true) =>
    HabitStore.list(
      HabitStore.list().sort((habitA, habitB) => {
        let statusA = HabitStore.getHabitStatusForHabitDateList(habitA);
        let statusB = HabitStore.getHabitStatusForHabitDateList(habitB);
        if (statusA === statusB) return 0;
        return asc 
        ? (statusA >
        statusB
          ? -1
          : 1)
        : (statusB >
        statusA
          ? -1
          : 1)
      })
    ),

  submit: (attrs) =>
    HabitStore.create(attrs)
      .then((response) => {
        return {
          ...JSON.parse(response.data),
          ...JSON.parse(response.config.data),
        }
      })
      .then((current) => {
        let newList = HabitStore.fullList();
        current.domain_id = +current.domain_id; 
        if (
          newList.length == 1 &&
          newList[0].name === "Select a Life-Domain to start tracking"
        )
        newList.pop();
        newList.push(current);
        HabitStore.fullList(newList);
        HabitStore.current(current);
        HabitStore.indexHabitsOfDomain(+current?.domain_id);
        return current;
      })
      .then(() => {
        window.FlashMessage.success("A habit was added to the database!");
      })
      .catch(handleErrorType),

  runFilterByDomain: (domainId) => {
    return HabitStore.list(HabitStore.filterByDomainId(domainId))},

  runCurrentFilterByNode: (nodeId) =>
    HabitStore.current(
      HabitStore.fullList().filter(
        (habit) => habit.habit_node_id === +nodeId
      )[0]
    ),

  runDelete: (id) =>
    HabitStore.delete(id)
      .then(() => {
        HabitStore.fullList = HabitStore.fullList().filter((i) => i.id !== id);
      })
      .catch(handleErrorType),
});

export default HabitStore;
