import stream from 'mithril/stream';
import { clientRoutes } from './client';

const basePath = '/habit_trees';

const TreeStore = {
  show_all: clientRoutes(basePath).show_all,
  current: stream({}),

  get: () => TreeStore.show_all().catch((err) => {
    console.log(err);
  }),

  clear: () => {
    TreeStore.current = stream({});
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

};
export default TreeStore;
