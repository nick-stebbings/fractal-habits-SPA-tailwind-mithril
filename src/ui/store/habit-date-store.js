var DateStore = {
  current: {},
  list: [],
  clear: () => {
    DateStore.current = {};
  },
  submit: () => {
    DateStore.create()
      .then(() => {
        Flash.success("Note created.");
        // This could be optimized instead of reloading.
        DateStore.load();
        DateStore.clear();
      })
      .catch((err) => {
        Flash.warning(err.response.message);
      });
  },

  runUpdate: (id, value) => {
    DateStore.update(id, value).catch((e) => {
      Flash.warning("Could not update note: " + e.response.message);
    });
  },

  runDelete: (id) => {
    DateStore.delete(id)
      .then(() => {
        Flash.success("Note deleted.");
        DateStore.list = DateStore.list.filter((i) => {
          return i.id !== id;
        });
      })
      .catch((err) => {
        console.log(err);
        Flash.warning("Could not delete: " + err.response.message);
      });
  },
};

export default DateStore;
