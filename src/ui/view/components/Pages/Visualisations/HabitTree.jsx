import stream from "mithril/stream";
import { select, hierarchy, tree, zoom, zoomIdentity } from "d3";
import {
  debounce,
  d3SetupCanvas,
  zooms,
  redraw,
} from "../../../../assets/scripts/utilities";

import TreeStore from "../../../../store/habit-tree-store.js";
import DomainStore from "../../../../store/domain-store.js";
import DateStore from "../../../../store/date-store.js";
import NodeStore from "../../../../store/habit-node-store.js";
import HabitDateStore from "../../../../store/habit-date-store.js";

import "../../../../assets/styles/components/d3vis.scss";
import HabitStore from "../../../../store/habit-store";

const HabitTree = function () {
  let demoData = m.route.param("demo");
  let canvasWidth;
  let canvasHeight;
  let svg;
  const debounceInterval = 150;
  const margin = {
    top: 50,
    right: 0,
    bottom: 50,
    left: 0,
  };

  const parseValues = (valueString) => {
    const [splitValues, status] = valueString.split("-");
    const [, left, right] = splitValues.split(/\D/);
    return { left, right, status };
  };

  const nodeStatusColours = (d) => {
    if (typeof d.data.value === undefined) return "#898989";
    switch (parseValues(d.data.value).status) {
      case "true":
        return "#93cc96";
      case "false":
        return "#f2aa53";
      default:
        return "#898989";
    }
  };

  const zoomer = zoom().scaleExtent([0.5, 2]).on("zoom", zooms);

  function render(svg, canvasWidth, canvasHeight) {
    svg.selectAll("*").remove();
    const canvas = svg
      .call(zoomer)
      .append("g")
      .classed("canvas", true)
      .attr(
        "transform",
        `translate(${margin.left + canvasWidth / 2},${margin.top})`
      );
    const handleEvents = function (selection) {
      selection
        .on("click", function (event, node) {
          const g = select(this);
          const n = g.select(".the-node");
          HabitStore.runCurrentFilterByNode(node.data.name),
            console.log(
              JSON.stringify({
                habit_id: HabitStore.current().id,
                date_id: DateStore.current().id,
                completed_status: "true",
              })
            );
          console.log("ddd", HabitStore.current());
          // n.style("fill", "#93cc96");
        })
        .on("mouseover", function () {
          const g = select(this);
          const n = g.select(".the-node");

          g.select(".label").transition().duration(700).style("opacity", "1");
        })
        .on("mouseout", function () {
          const g = select(this);
          const n = g.select(".the-node");

          g.select(".label").transition().duration(700).style("opacity", "0");
        });
    };

    const scaleFactor = 1.5;
    const dy = (window.innerWidth / 50) * scaleFactor;
    const dx = (window.innerHeight / 10) * scaleFactor;
    // console.log(root, 'root at first');
    // root.y0 = dy / 2;
    // root.x0 = 0;
    // root.descendants().forEach((d, i) => {
    //   d.id = i;
    //   d._children = d.children;
    //   if (d.depth && d.data.name.length !== 7) d.children = null;
    // });
    const rootData = TreeStore.root();
    const treeLayout = tree()
      .size(canvasWidth, canvasHeight)
      .nodeSize([dy, dx]);

    treeLayout(rootData);

    const gLink = canvas
      .append("g")
      .classed("links", true)
      .attr("fill", "none")
      .attr("stroke", "#555")
      .attr("stroke-opacity", 0.4)
      .attr("stroke-width", 1.5);
    const gNode = canvas
      .append("g")
      .classed("nodes", true)
      .attr("cursor", "pointer")
      .attr("pointer-events", "all");

    // console.log(rootData, 'rootData after layout');
    // console.log(rootData.descendants(), 'rootData descendentst');

    const links = gLink.selectAll("line.link").data(rootData.links());
    const enteringLinks = links
      .enter()
      .append("line")
      .classed("link", true)
      .attr("x1", (d) => d.source.x)
      .attr("y1", (d) => d.source.y)
      .attr("x2", (d) => d.target.x)
      .attr("y2", (d) => d.target.y)
      .style("stroke", "#5f5f5f");

    const nodes = gNode.selectAll("g.node").data(rootData.descendants());
    const enteringNodes = nodes
      .enter()
      .append("g")
      .classed("the-node solid", true)
      .style("fill", nodeStatusColours)
      .attr("transform", (d) => `translate(${d.x},${d.y})`)
      .call(handleEvents);
    enteringNodes
      .append("text")
      .attr("class", "label")
      .attr("dx", 15)
      .attr("dy", 5)
      .style("opacity", "0")
      .text((d) => d.data.name);
    enteringNodes.append("circle").attr("r", 6 * scaleFactor);
  }

  // TODO:  Figure out how to stop the second API call on the non-demo trees

  return {
    type: "vis",
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
            svg && render(svg, canvasWidth, canvasHeight);
          });
    },
    oninit: () => {
      const oldWindowWidth = stream(window.innerWidth);

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
              NodeStore.runFilterCurrentHabit(HabitStore.current());
            });
          })
          .then(() => {
            svg && render(svg, canvasWidth, canvasHeight);
          });

      window.onresize = debounce((e) => {
        let factor = 1 - 1 / (window.innerWidth / oldWindowWidth());
        zoomer.scaleBy(svg.transition().duration(250), 1 - factor);
        oldWindowWidth(document.body.getBoundingClientRect().width);
      }, debounceInterval);
    },
    oncreate: ({ attrs }) => {
      svg = select(`div#${attrs.divId}`)
        .classed("h-screen", true)
        .classed("w-full", true)
        .append("svg")
        .attr("width", "100%")
        .attr("height", "100%")
        .attr("style", "pointer-events: all");

      ({ canvasWidth, canvasHeight } = d3SetupCanvas(document, margin));

      document.getElementById("activate-demo").addEventListener("click", () => {
        DateStore.submit({ h_date: new Date(new Date().toDateString()) })
          .then(DateStore.indexDatesOfHabit(HabitStore.current()))
          .then(DateStore.current(DateStore.listForHabit().slice(-1)[0]))
          .then(m.redraw);
      });
      render(svg, canvasWidth, canvasHeight);
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
