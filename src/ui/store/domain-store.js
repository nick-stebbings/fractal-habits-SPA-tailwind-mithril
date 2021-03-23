import stream from 'mithril/stream';
import { clientRoutes, handleErrorType } from './client';

const basePath = '/domains';

const DomainStore = Object.assign(clientRoutes(basePath), {
  current: stream({ name: 'Placeholder' }),

  get: (id) => DomainStore.show_one(id)
    .then((response) => JSON.parse(response.data))
    .then(DomainStore.current)
    .catch(handleErrorType),

  clear: () => {
    DomainStore.current = stream({ name: 'Placeholder' });
  },

  list: stream([{ name: 'No Domains Registered' }]),

  index: () => DomainStore.show_all()
    .then((response) => JSON.parse(response.data).domains)
    .then(DomainStore.list)
    .then((list) => DomainStore.current(list[0]))
    .catch(handleErrorType),

  submit: (attrs) => DomainStore.create(attrs)
    .then((response) => ({ ...response.data, ...JSON.parse(response.config.data) }))
    .then(DomainStore.current)
    .catch(handleErrorType),

  runReplace: (id, value) => DomainStore.replace(id, value).catch(() => {
    // TODO update list/current
  }),

  runUpdate: (id, value) => DomainStore.update(id, value).catch(() => {
    // TODO update list/current
  }),

  runDelete: (id) => DomainStore.delete(id)
    .then(() => {
      DomainStore.list = DomainStore.list.filter((i) => i.id !== id);
    })
    .catch(handleErrorType),
});

export default DomainStore;
