import {clientRoutes, handleAndRethrow} from "./client";
import stream from "mithril/stream";

const basePath = "/habit_trees/nodes";

    // create: (parent) => axios.post(basePath, { parent_id: parent }),
const NodeStore = Object.assign(clientRoutes(basePath), {
  current: stream({}),

  get: (id) => {
    return NodeStore.show_one(id)
      .then((response) => JSON.parse(response.data))
      .then(NodeStore.current)
      .catch(handleAndRethrow);
  },

  clear: () => {
    NodeStore.current = {};
  },

  list: stream([]),

  index: () => {
    return NodeStore.show_all()
      .then((response) => JSON.parse(response.data).habit_nodes)
      .then(NodeStore.list)
      .catch(handleAndRethrow);
  },

  submit: (attrs) => {
    NodeStore.create(attrs)
      .then(NodeStore.current)
      .then(() => {
        NodeStore.index();
        NodeStore.clear();
      })
      .catch(handleAndRethrow);
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
        NodeStore.list = NodeStore.list.filter((i) => {
          return i.id !== id;
        });
      })
      .catch(handleAndRethrow);
  },
});

export default NodeStore;
