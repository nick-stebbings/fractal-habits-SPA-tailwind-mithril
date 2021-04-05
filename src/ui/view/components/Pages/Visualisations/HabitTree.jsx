import stream from "mithril/stream";
import { select, zoom } from "d3";
import {
  debounce,
  zooms,
  d3SetupCanvas,
  renderTree,
} from "../../../../assets/scripts/d3-utilities.js";

import TreeStore from "../../../../store/habit-tree-store.js";
import DomainStore from "../../../../store/domain-store.js";
import DateStore from "../../../../store/date-store.js";
import NodeStore from "../../../../store/habit-node-store.js";
import HabitDateStore from "../../../../store/habit-date-store.js";
import HabitStore from "../../../../store/habit-store";

import "../../../../assets/styles/components/d3vis.scss";

const HabitTree = function () {
  let demoData = m.route.param("demo");
  let canvasWidth;
  let canvasHeight;
  let svg;
  const debounceInterval = 150;
  const zoomer = zoom().scaleExtent([0.5, 2]).on("zoom", zooms);

  return {
    type: "vis",
    oninit: () => {
      const oldWindowWidth = stream(window.innerWidth);
      window.onresize = debounce(() => {
        let factor = 1 - 1 / (window.innerWidth / oldWindowWidth());
        zoomer.scaleBy(svg.transition().duration(250), 1 - factor);
        oldWindowWidth(document.body.getBoundingClientRect().width);
      }, debounceInterval);

      DateStore.current().id &&
        TreeStore.index(
          demoData,
          DomainStore.current().id,
          DateStore.current().id
        )
          .then(() => {
            DateStore.indexDatesOfHabit(HabitStore.current());

            HabitDateStore.index().then((a) => console.log(a));
            NodeStore.index().then(() => {
              NodeStore.runCurrentFilterByHabit(HabitStore.current());
            });
          })
          .then(() => {
            svg && renderTree(svg, canvasWidth, canvasHeight, zoomer);
          });
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
      renderTree(svg, canvasWidth, canvasHeight, zoomer);

      // document.getElementById("activate-demo").addEventListener("click", () => {
      //   DateStore.submit({ h_date: new Date(new Date().toDateString()) })
      //     .then(DateStore.indexDatesOfHabit(HabitStore.current()))
      //     .then(DateStore.current(DateStore.listForHabit().slice(-1)[0]))
      //     .then(m.redraw);
      // });
    },
    onupdate: () => {
      DateStore.current() &&
        TreeStore.index(
          demoData,
          DomainStore.current().id,
          DateStore.current().id
        )
          .then(() => {
            DateStore.indexDatesOfHabit(HabitStore.current());
          })
          .then(() => {
            svg && renderTree(svg, canvasWidth, canvasHeight, zoomer);
          });
    },
    view: (vnode) => (
      <div id="vis" className="w-full h-full mx-auto">
        <button type="button" id="activate-demo" class="z-50">
          Toggle Demo Data
        </button>
        {vnode.children}
      </div>
    ),
  };
};

export default HabitTree;
