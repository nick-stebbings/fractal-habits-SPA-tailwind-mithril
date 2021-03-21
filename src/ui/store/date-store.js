import {clientRoutes, handleErrorType} from "./client";
import stream from "mithril/stream";

const basePath = "/dates";

const DateStore = Object.assign(clientRoutes(basePath), {
  current: stream({}),

  get: (id) => {
    return DateStore.show_one(id)
      .then((response) => JSON.parse(response.data))
      .then(DateStore.current)
      .catch(handleErrorType);
  },

  clear: () => {
    DateStore.current = stream({});
  },

  list: stream([]),

  index: () => {
    return DateStore.show_all()
    .then((response) => JSON.parse(response.data).dates)
      .then(DateStore.list)
      .then((list) => {
        DateStore.current(list[list.length - 1])
      })
      .catch(handleErrorType);
  },

  submit: (attrs) => {
    return DateStore.create(attrs)
      .then((response) => {
        console.log(response);
        let date = response.data;
        DateStore.index(); //Could save a DB call here
        return date;
      })
      .then(DateStore.current)
      .catch(handleErrorType);
  },
});

export default DateStore; 