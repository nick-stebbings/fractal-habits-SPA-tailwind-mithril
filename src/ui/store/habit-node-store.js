import clientRoutes from "./client";
import stream from "mithril/stream";

const basePath = "/habit_trees/nodes";

const NodeStore = Object.assign(clientRoutes(basePath), {
  current: stream({}),

  get: (id) => {
    return NodeStore.show_one(id)
      .then((response) => JSON.parse(response.data))
      .then(NodeStore.current)
      .catch((err) => {
        console.log(err);
      });
  },

  clear: () => {
    NodeStore.current = {};
  },

  list: stream([]),

  index: () => {
    return NodeStore.show_all()
      .then((response) => JSON.parse(response.data).habit_nodes)
      .then(NodeStore.list)
      .catch((err) => {
        console.log(err);
      });
  },

  submit: (attrs) => {
    NodeStore.create(attrs)
      .then(NodeStore.current)
      .then(() => {
        NodeStore.index();
        NodeStore.clear();
      })
      .catch((err) => {
        console.log(err);
      });
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
      .catch((err) => {
        console.log(err);
      });
  },
});

export default NodeStore;
