import {clientRoutes, handleAndRethrow} from "./client";
import stream from "mithril/stream";
const basePath = "/domains";

const DomainStore = Object.assign(clientRoutes(basePath), {
  current: stream({}),

  get: (id) => {
    return DomainStore.show_one(id)
      .then((response) => JSON.parse(response.data))
      .then(DomainStore.current)
      .catch(handleAndRethrow);
  },

  clear: () => {
    DomainStore.current = {};
  },

  list: stream([]),

  index: () => {
    return DomainStore.show_all()
      .then((response) => JSON.parse(response.data).domains)
      .then((r) => {
        console.log(DomainStore.current(), "current!");
        return r
      })
      .then(DomainStore.list)
      .then((list) => {
        return DomainStore.current(list[0]);
      })
      .catch(handleAndRethrow);
  },

  submit: (attrs) => {
    return DomainStore.create(attrs)
      .then((response) => {
        let domain = response.data;
        DomainStore.index(); //Could save a DB call here
        return domain;
      })
      .then(DomainStore.current)
      .catch(handleAndRethrow);;
  },

  runReplace: (id, value) => {
    return DomainStore.replace(id, value).catch((e) => {
      // TODO update list/current
    });
  },

  runUpdate: (id, value) => {
    return DomainStore.update(id, value).catch((e) => {
      // TODO update list/current
    });
  },

  runDelete: (id) => {
    return DomainStore.delete(id)
      .then(() => {
        DomainStore.list = DomainStore.list.filter((i) => {
          return i.id !== id;
        });
      })
      .catch(handleAndRethrow);
  },
});

export default DomainStore; 