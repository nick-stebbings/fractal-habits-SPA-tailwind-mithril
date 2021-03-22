import stream from 'mithril/stream';
import { clientRoutes, handleErrorType } from './client';

const basePath = '/habit_trees/nodes';

// create: (parent) => axios.post(basePath, { parent_id: parent }),
const NodeStore = Object.assign(clientRoutes(basePath), {
  current: stream({}),

  get: (id) => NodeStore.show_one(id)
    .then((response) => JSON.parse(response.data))
    .then(NodeStore.current)
    .catch(handleErrorType),

  clear: () => {
    NodeStore.current = stream({});
  },

  list: stream([]),

  index: () => NodeStore.show_all()
    .then((response) => JSON.parse(response.data).habit_nodes)
    .then(NodeStore.list)
    .catch(handleErrorType),

  submit: (attrs) => {
    NodeStore.create(attrs)
      .then(NodeStore.current)
      .then(() => {
        NodeStore.index();
      })
      .catch(handleErrorType);
  },

  runReplace: (id, value) => {
    NodeStore.replace(id, value).catch((e) => {
      // TODO update list/current
    });
  },

  runUpdate: (id, value) => {
    NodeStore.update(id, value).catch((e) => {
      // TODO update list/current
    });
  },

  runDelete: (id) => {
    NodeStore.delete(id)
      .then(() => {
        NodeStore.list = NodeStore.list.filter((i) => i.id !== id);
      })
      .catch(handleErrorType);
  },
});

export default NodeStore;
