import {clientRoutes, handleAndRethrow} from "./client";
import stream from "mithril/stream";

const basePath = "/habits";

const HabitStore = Object.assign(clientRoutes(basePath), {
  current: stream({}),

  get: (id) => {
    return HabitStore.show_one(id)
      .then((response) => JSON.parse(response.data))
      .then(HabitStore.current)
      .catch(window.FlashMessage.error);
  },

  clear: () => {
    HabitStore.current = {};
  },

  list: stream([]),

  index: () => {
    return HabitStore.show_all()
    .then((response) => JSON.parse(response.data).habits)
      .then(HabitStore.list)
      .then((list) => {
        HabitStore.current(list[0])
      })
      .catch(handleAndRethrow);
  },

  submit: (attrs) => {
    return HabitStore.create(attrs)
      .then(HabitStore.current)
      .then(() => {
        HabitStore.list(HabitStore.list().push(HabitStore.current()));
      })
      .catch(handleAndRethrow);
  },

  runReplace: (id, value) => {
    return HabitStore.replace(id, value).catch((e) => {
      // TODO update list/current
    });
  },

  runUpdate: (id, value) => {
    return HabitStore.update(id, value).catch((e) => {
      // TODO update list/current
    });
  },

  runDelete: (id) => {
    return HabitStore.delete(id)
      .then(() => {
        HabitStore.list = HabitStore.list.filter((i) => {
          return i.id !== id;
        });
      })
      .catch(handleAndRethrow);
  },
});

export default HabitStore; 