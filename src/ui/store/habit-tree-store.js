import stream from 'mithril/stream';
import { clientRoutes, handleErrorType } from './client';

const basePath = '/habit_trees';

const TreeStore = {
  showAll: clientRoutes(basePath).show_all,
  showAllForDomain: function(domainId) {
    return clientRoutes(`/demo/domain/${domainId}/habit_tree`).show_all
  },

  current: stream({}),

  clear: () => {
    TreeStore.current = stream({});
  },

  get: (useDemoData, domainId) => {
    if (useDemoData) {
      return clientRoutes(`/habit_trees?demo=true&domain_id=${domainId}`).show_all();
    }
    return TreeStore.showAll().catch(handleErrorType);
  },
  getForDomain: (domainId) => {
    return TreeStore.showAllForDomain(domainId)().catch(handleErrorType);
  },
};
export default TreeStore;
