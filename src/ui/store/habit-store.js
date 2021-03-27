import stream from 'mithril/stream';
import { clientRoutes, handleErrorType } from './client';

const basePath = '/habits';

const HabitStore = Object.assign(clientRoutes(basePath), {
  current: stream({ name: 'Select a Life Domain' }),

  get: (id) => HabitStore.show_one(id)
    .then((response) => JSON.parse(response.data))
    .then(HabitStore.current)
    .catch(handleErrorType),

  clear: () => {
    HabitStore.current = stream({});
  },

  list: stream([]),

  index: () => HabitStore.show_all()
    .then((response) => JSON.parse(response.data).habits)
    .then(HabitStore.list)
    .then((list) => {
      HabitStore.current(list[0]);
    })
    .catch(handleErrorType),

  submit: (attrs) => HabitStore.create(attrs)
    .then((response) => {
      const habit = response.data;
      // HabitStore.index(); // Could save a DB call here
      return habit;
    })
    .then(HabitStore.current)
    .then(() => {
      window.FlashMessage.success('A habit was added to the database!');
    })
    .catch(handleErrorType),

  runReplace: (id, value) => HabitStore.replace(id, value).catch((e) => {
    // TODO update list/current
  }),

  runUpdate: (id, value) => HabitStore.update(id, value).catch((e) => {
    // TODO update list/current
  }),

  runDelete: (id) => HabitStore.delete(id)
    .then(() => {
      HabitStore.list = HabitStore.list.filter((i) => i.id !== id);
    })
    .catch(handleErrorType),
});

export default HabitStore;
