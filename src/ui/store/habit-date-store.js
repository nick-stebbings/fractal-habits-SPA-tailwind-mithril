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
  create: () => {
    return m.request({
      method: "POST",
      url: "/api/v1/note",
      headers: {
        Authorization: CookieStore.bearerToken(),
      },
      body: DateStore.current,
    });
  },
  load: () => {
    return m
      .request({
        method: "GET",
        url: "/api/v1/note",
        headers: {
          Authorization: CookieStore.bearerToken(),
        },
      })
      .then((result) => {
        DateStore.list = result.notes;
      });
  },
  runUpdate: (id, value) => {
    DateStore.update(id, value).catch((e) => {
      Flash.warning("Could not update note: " + e.response.message);
    });
  },
  update: (id, text) => {
    return m.request({
      method: "PUT",
      url: "/api/v1/note/" + id,
      headers: {
        Authorization: CookieStore.bearerToken(),
      },
      body: { message: text },
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
  delete: (id) => {
    return m.request({
      method: "DELETE",
      url: "/api/v1/note/" + id,
      headers: {
        Authorization: CookieStore.bearerToken(),
      },
    });
  },
};

export default DateStore;
