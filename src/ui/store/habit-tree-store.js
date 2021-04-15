import stream from "mithril/stream";
import { hierarchy } from "d3";
import { clientRoutes, handleErrorType } from "./client";

const basePath = "/habit_trees";

const TreeStore = {
  showAll: clientRoutes(basePath).show_all,
  showAllForDomain: function (domainId, dateId) {
    return clientRoutes(`/demo/domain/${domainId}/habit_tree?date_id=${dateId}`)
      .show_all;
  },

  current: stream({}),
  root: stream(hierarchy({ name: "", children: "" })),

  clear: () => {
    TreeStore.current = stream({});
  },

  index: (isDemo, domainId, dateId) => {
    return TreeStore.getForDomainDate(isDemo, domainId, dateId)
      .then((response) =>{ console.log(domainId); return response })

      .then((response) =>
        isDemo
          ? hierarchy(response.data, (d) => {
              return d.children;
            })
          : hierarchy(response.data)
      )
      .then(TreeStore.root)
      .catch((err) => {
        console.log("Tree did not load!");
      });
  },

  getForDomainDate: (useDemoData, domainId, dateId) => {
    if (!useDemoData) {
      return clientRoutes(
        `/habit_trees?domain_id=${domainId}&date_id=${dateId}`
      ).show_all();
    }
    return TreeStore.showAllForDomain(domainId, dateId)().catch(
      handleErrorType
    );
  },
};
export default TreeStore;
