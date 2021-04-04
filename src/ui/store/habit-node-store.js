import stream from "mithril/stream";
import { clientRoutes, handleErrorType } from "./client";

const basePath = "/habit_trees/nodes";

const NodeStore = Object.assign(clientRoutes(basePath), {
  current: stream({}),

  get: (id) =>
    NodeStore.show_one(id)
      .then((response) => response.data)
      .then(NodeStore.current)
      .catch(handleErrorType),

  clear: () => {
    NodeStore.current = stream({});
  },

  list: stream([]),

  index: () =>
    NodeStore.show_all()
      .then((response) => JSON.parse(response.data).habit_nodes)
      .then(NodeStore.list)
      .catch(handleErrorType),

  submit: (attrs) => {
    NodeStore.create(attrs).then(NodeStore.current).catch(handleErrorType);
  },

  runFilterCurrentHabit: (habit) =>
    NodeStore.current(NodeStore.runFilter(habit)),

  runFilter: (habit_id) =>
    NodeStore.list(NodeStore.list().filter((node) => node.id == habit_id)),

  runReplace: (id, value) => {
    NodeStore.replace(id, value).catch((e) => {
      // TODO update list/current
    });
  },

  runUpdate: (id, value) => {
    NodeStore.update(id, value).catch((e) => {
      // TODO update list/current E.G
      // {
      //     "id": 1,
      //     "lft": 1,
      //     "rgt": 26,
      //     "parent_id": null
      // }
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
