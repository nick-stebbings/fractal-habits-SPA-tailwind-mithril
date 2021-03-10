import clientRoutes from "./client";
import stream from "mithril/stream";

const basePath = "/habit_trees/nodes";

const NodeStore = Object.assign(clientRoutes(basePath), {
  current: stream({ message: "Waiting" }),
  list: stream([]),
  clear: () => {
    // NodeStore.current = {};
  },
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

  // runUpdate: (id, value) => {
  //   NodeStore.update(id, value).catch((e) => {
  //     Flash.warning("Could not update note: " + e.response.message);
  //   });
  // },

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
