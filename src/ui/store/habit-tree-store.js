import stream from 'mithril/stream';
import { clientRoutes, handleErrorType } from './client';

const basePath = '/habit_trees';

const TreeStore = {
  show_all: clientRoutes(basePath).show_all,
  current: stream({}),

  get: (useDemoData, domainId) => {
    if (useDemoData) {
      return clientRoutes(`/habit_trees?demo=true&domain_id=${domainId}`).show_all();
    }
    return TreeStore.show_all().catch(handleErrorType);
  },

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
