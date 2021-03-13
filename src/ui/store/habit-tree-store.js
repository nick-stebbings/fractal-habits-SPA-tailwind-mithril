import clientRoutes from "./client";
import stream from "mithril/stream";

const basePath = "/habit_trees";

const TreeStore = Object.assign(
  { show_all: clientRoutes(basePath)["show_all"] },
  {
    current: stream({}),

    get: () => {
      return TreeStore.show_all().catch((err) => {
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
