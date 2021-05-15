import stream from 'mithril/stream';
import { hierarchy } from 'd3';
import { clientRoutes, handleErrorType } from './client';

const basePath = '/habit_trees';

const TreeStore = {
  showAll: clientRoutes(basePath).show_all,
  showAllForDomain(domainId, dateId) {
    return clientRoutes(`/demo/domain/${domainId}/habit_tree?date_id=${dateId}`)
      .show_all;
  },

  current: stream({}),
  root: stream({ name: '', children: '' }),

  clear: () => {
    TreeStore.root = stream({ name: '', children: '' });
  },

  index: (isDemo, domainId, dateId) => TreeStore.getForDomainDate(isDemo, domainId, dateId)
    .then((response) => (isDemo
      ? hierarchy(response.data, (d) => d.children)
      : hierarchy(response.data)))
    .then(TreeStore.root)
    .catch((err) => {
      TreeStore.root({ name: '', children: '' });
      console.log('Tree did not load!');
    }),

  getForDomainDate: (useDemoData, domainId, dateId) => {
    if (!useDemoData) {
      return clientRoutes(
        `/habit_trees?domain_id=${domainId}&date_id=${dateId}`,
      ).show_all().catch(handleErrorType);
    }
    return TreeStore.showAllForDomain(domainId, dateId)().catch(
      handleErrorType,
    );
  },
};
export default TreeStore;
