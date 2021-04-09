import stream from "mithril/stream";
import { clientRoutes, handleErrorType } from "./client";

const basePath = "/habits";

const HabitStore = Object.assign(clientRoutes(basePath), {
  current: stream({ name: "Select a Life-Domain to start tracking", id: 1 }),

  get: (id) =>
    HabitStore.show_one(id)
      .then((response) => JSON.parse(response.data))
      .then(HabitStore.current)
      .catch(handleErrorType),

  clear: () => {
    HabitStore.current = stream({});
  },

  list: stream([]),
  fullList: stream([]),

  index: () =>
    HabitStore.show_all()
      .then((response) => JSON.parse(response.data).habits)
      .then((habits) => {
        if (habits.length !== 0) {
          let list = HabitStore.fullList(habits);
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

  indexHabitsOfDomain: (id) => {
    HabitStore.runFilterByDomain(id);
    HabitStore.current(HabitStore.list()[HabitStore.list().length - 1]);
  },

  filterByDomainId: (id) =>
    HabitStore.fullList().filter((habit) => habit.domain_id === id),

  filterById: (id) => HabitStore.fullList().filter((habit) => habit.id === id),

  filterByName: (filterString) =>
    HabitStore.list().filter((habit) =>
      habit.name.match(new RegExp(filterString, "i"))
    ),

  submit: (attrs) =>
    HabitStore.create(attrs)
      .then((response) => response.data)
      .then((habit) => HabitStore.indexHabitsOfDomain(habit.domain_id))
      .then(() => {
        window.FlashMessage.success("A habit was added to the database!");
      })
      .catch(handleErrorType),

  runFilterByDomain: (domainId) =>
    HabitStore.list(HabitStore.filterByDomainId(domainId)),

  runCurrentFilterByNode: (nodeId) =>
    HabitStore.current(
      HabitStore.fullList().filter(
        (habit) => habit.habit_node_id === +nodeId
      )[0]
    ),

  runReplace: (id, value) =>
    HabitStore.replace(id, value).catch((e) => {
      // TODO update list/current
    }),

  runUpdate: (id, value) =>
    HabitStore.update(id, value).catch((e) => {
      // TODO update list/current
    }),

  runDelete: (id) =>
    HabitStore.delete(id)
      .then(() => {
        HabitStore.fullList = HabitStore.fullList().filter((i) => i.id !== id);
      })
      .catch(handleErrorType),
});

export default HabitStore;
