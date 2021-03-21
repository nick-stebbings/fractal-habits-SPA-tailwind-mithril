import {clientRoutes, handleErrorType} from "./client";
import stream from "mithril/stream";

const basePath = "/habits";

const HabitStore = Object.assign(clientRoutes(basePath), {
  current: stream({}),

  get: (id) => {
    return HabitStore.show_one(id)
      .then((response) => JSON.parse(response.data))
      .then(HabitStore.current)
      .catch(handleErrorType);
  },

  clear: () => {
    HabitStore.current =  stream({});
  },

  list: stream([]),

  index: () => {
    return HabitStore.show_all()
    .then((response) => JSON.parse(response.data).habits)
      .then(HabitStore.list)
      .then((list) => {
        HabitStore.current(list[0])
      })
      .catch(handleErrorType);
  },

  submit: (attrs) => {
    return HabitStore.create(attrs)
      .then((response) => {
        let habit = response.data;
        HabitStore.index(); //Could save a DB call here
        return habit;
      })
      .then(HabitStore.current)
      .catch(handleErrorType);
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
      .catch(handleErrorType);
  },
});

export default HabitStore; 