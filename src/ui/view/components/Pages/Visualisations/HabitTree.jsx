import stream from "mithril/stream";
import { select, zoom } from "d3";
import {
  debounce,
  zooms,
  d3SetupCanvas,
  renderTree,
  collapseTree,
  expandTree,
} from "../../../../assets/scripts/d3-utilities.js";

import TreeStore from "../../../../store/habit-tree-store.js";
import DomainStore from "../../../../store/domain-store.js";
import DateStore from "../../../../store/date-store.js";
import NodeStore from "../../../../store/habit-node-store.js";
import HabitDateStore from "../../../../store/habit-date-store.js";
import HabitStore from "../../../../store/habit-store";

import "../../../../assets/styles/pages/d3vis.scss";

const HabitTree = function () {
  let demoData = m.route.param("demo");
  let canvasWidth;
  let canvasHeight;
  let svg;
  const debounceInterval = 150;
  const zoomer = zoom().scaleExtent([0, 5]).on("zoom", zooms);
  function updateStoresAndRenderTree() {
    DateStore.current().id &&
      TreeStore.index(
        demoData,
        DomainStore.current().id,
        DateStore.current().id
      )
        .then(() => {
          DateStore.indexDatesOfHabit(HabitStore.current());
          !demoData &&
            NodeStore.index().then(() => {
              HabitDateStore.index().then(() =>
                NodeStore.runCurrentFilterByHabit(HabitStore.current())
              );
            });
        })
        .then(() => {
          TreeStore.root() &&
            svg &&
            renderTree(svg, demoData, canvasWidth, canvasHeight, zoomer);
        });
  }
  return {
    type: "vis",
    oninit: () => {
      const oldWindowWidth = stream(window.innerWidth);
      window.onresize = debounce(() => {
        let factor = 1 - 1 / (window.innerWidth / oldWindowWidth());
        zoomer.scaleBy(svg.transition().duration(250), 1 - factor);
        oldWindowWidth(document.body.getBoundingClientRect().width);
      }, debounceInterval);

      updateStoresAndRenderTree();
    },
    oncreate: ({ attrs }) => {
      svg = select(`div#${attrs.divId}`)
        .classed("h-screen", true)
        .classed("w-full", true)
        .append("svg")
        .attr("width", "100%")
        .attr("height", "100%")
        .attr("style", "pointer-events: all");

      ({ canvasWidth, canvasHeight } = d3SetupCanvas(document));

      document
        .getElementById("collapse-tree")
        .addEventListener("click", (e) => {
          e.target.textContent.includes("Collapse")
            ? collapseTree()
            : expandTree();
          e.target.textContent = e.target.textContent.includes("Collapse")
            ? "Expand Tree"
            : "Collapse Tree";
          renderTree(svg, demoData, canvasWidth, canvasHeight, zoomer);
        });
    },
    onupdate: updateStoresAndRenderTree,
    view: (vnode) => (
      <div id="vis" className="w-full h-full mx-auto">
        <button type="button" id="activate-demo">
          Generate Demo Data
        </button>
        <button type="button" id="collapse-tree">
          Collapse Tree
        </button>
        {vnode.children}
      </div>
    ),
  };
};

export default HabitTree;
