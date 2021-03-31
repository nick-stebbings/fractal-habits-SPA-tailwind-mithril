import stream from 'mithril/stream';
import { clientRoutes, handleErrorType } from './client';

const basePath = '/domains';

const DomainStore = Object.assign(clientRoutes(basePath), {
  current: stream({ name: "No Domains Registered", id: "1" }),

  get: (id) =>
    DomainStore.show_one(id)
      .then((response) => JSON.parse(response.data))
      .then(DomainStore.current)
      .catch(handleErrorType),

  clear: () => {
    DomainStore.current = stream({ name: "No Domains Registered", id: "1" });
  },

  list: stream([{ name: "No Domains Registered", id: "1" }]),

  index: () =>
    DomainStore.show_all()
      .then((response) => JSON.parse(response.data).domains)
      .then((domains) => {
        if (domains.length !== 0) {
          let list = DomainStore.list(domains);
          DomainStore.current(list[0]);
          return list;
        }
        return DomainStore.list();
      })
      .catch(handleErrorType),

  filterByDomainName: (domainName) =>
    DomainStore.list().filter((domain) => domain.name == domainName)[0],

  runFilterCurrent: (domainName) =>
    DomainStore.current(DomainStore.filterByDomainName(domainName)),

  submit: (attrs) =>
    DomainStore.create(attrs)
      .then((response) => ({
        ...response.data,
        ...JSON.parse(response.config.data),
      }))
      .then(DomainStore.current)
      .then((current) => {
        let newList = DomainStore.list();
        if (newList.length == 1 && newList[0].name === "No Domains Registered")
          newList.pop();
        newList.push(current);
        DomainStore.list(newList);
        return current;
      })
      .catch(handleErrorType),

  runReplace: (id, value) =>
    DomainStore.replace(id, value).catch(() => {
      // TODO update list/current
    }),

  runUpdate: (id, value) =>
    DomainStore.update(id, value).catch(() => {
      // TODO update list/current
    }),

  runDelete: (id) =>
    DomainStore.delete(id)
      .then(() => {
        DomainStore.list = DomainStore.list.filter((i) => i.id !== id);
      })
      .catch(handleErrorType),
});

export default DomainStore;
