import stream from 'mithril/stream';
import {hierarchy} from 'd3';
import { clientRoutes, handleErrorType } from './client';

const basePath = '/habit_trees';

const TreeStore = {
  showAll: clientRoutes(basePath).show_all,
  showAllForDomain: function(domainId) {
    return clientRoutes(`/demo/domain/${domainId}/habit_tree`).show_all
  },

  current: stream({}),
  root: stream(hierarchy({name: '', children: ''})),

  clear: () => {
    TreeStore.current = stream({});
  },

  index: (isDemo, domainId) => {
    return TreeStore.get(isDemo, domainId)
      .then((response) => hierarchy(response.data))
      .then(TreeStore.root)
      .then((err) => {
        console.log(err);
      });
  },

  get: (useDemoData, domainId) => {
    if (useDemoData) {
      console.log(
        'DEMO'
      );
      return clientRoutes(`/habit_trees?demo=true&domain_id=${domainId}`).show_all();
    }
    return TreeStore.showAll().catch(handleErrorType);
  },
  getForDomain: (domainId) => {
    return TreeStore.showAllForDomain(domainId)().catch(handleErrorType);
  },
};
export default TreeStore;
