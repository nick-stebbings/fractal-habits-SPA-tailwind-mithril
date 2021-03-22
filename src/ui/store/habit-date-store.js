import stream from 'mithril/stream';
import { clientRoutes, handleErrorType } from './client';

var HabitDateStore = {
  current: {},
  list: [],
  clear: () => {
    HabitDateStore.current = stream({});
  },
  submit: () => {
    HabitDateStore.create()
      .then(() => {
        Flash.success('Note created.');
        // This could be optimized instead of reloading.
        HabitDateStore.load();
        HabitDateStore.clear();
      })
      .catch((err) => {
        // Flash.warning(err.response.message);
      });
  },

  runUpHabitdate: (id, value) => {
    HabitDateStore.upHabitdate(id, value).catch((e) => {
      // Flash.warning("Could not upHabitdate note: " + e.response.message);
    });
  },

  runDelete: (id) => {
    HabitDateStore.delete(id)
      .then(() => {
        Flash.success('Note deleted.');
        HabitDateStore.list = HabitDateStore.list.filter((i) => i.id !== id);
      })
      .catch(handleErrorType);
  },
};

export default HabitDateStore;
