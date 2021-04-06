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

  filterById: (id) => NodeStore.list().filter((n) => n.id === +id),

  runCurrentFilterByHabit: (habit) =>
    NodeStore.current(
      NodeStore.list().filter((node) => node.id == habit.habit_node_id)[0]
    ),

  runFilterByHabit: (habit) =>
    NodeStore.list(
      NodeStore.list().filter((node) => node.id == habit.habit_node_id)
    ),

  runCurrentFilterById: (id) => NodeStore.current(NodeStore.filterById(id)[0]),

  runReplace: (id, attrs) => {
    NodeStore.replace(id, attrs).catch((e) => {
      console.log(e);
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
