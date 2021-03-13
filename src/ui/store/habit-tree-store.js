import clientRoutes from "./client";
import stream from "mithril/stream";

const basePath = "/habit_trees";

const TreeStore = Object.assign(
  { show_one: clientRoutes(basePath)["show_one"] },
  {
    current: stream({}),

    get: (parent_id) => {
      return TreeStore.show_one(parent_id)
        .then((response) => response.data)
        .then(TreeStore.current)
        .catch((err) => {
          console.log(err);
        });
    },

    clear: () => {
      TreeStore.current = {};
    },

    // list: stream([]),

    // index: () => {
    //   return TreeStore.show_all()
    //     .then((response) => JSON.parse(response.data).habit_nodes)
    //     .then(TreeStore.list)
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // },
  }
);
export default TreeStore;
