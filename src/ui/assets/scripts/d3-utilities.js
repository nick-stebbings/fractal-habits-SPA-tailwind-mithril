import { select, tree, easeLinear } from "d3";

import TreeStore from "../../store/habit-tree-store";
import NodeStore from "../../store/habit-node-store";
import HabitStore from "../../store/habit-node-store";

let canvasHeight, canvasWidth;
const margin = {
  top: 20,
  right: 0,
  bottom: 20,
  left: 0,
};

const positiveCol = "#93cc96";
const negativeCol = "#f2aa53";
const neutralCol = "#888";

const d3visPageMaker = function (layoutView, pageView, spinnerState) {
  const page = {};

  // Create a visualisation-containing div element with random ID
  const divId = `svg_container_${Math.floor(Math.random() * 1000000000)}${1}`;

  page.view = () => {
    // Pass unique selection id to the vis component for d3 selection
    const d3Canvas = m("div", { id: divId });

    return m(
      layoutView,
      { spinnerState: spinnerState },
      m(pageView, { divId }, d3Canvas)
    );
  };
  return page;
};

const d3SetupCanvas = function (document) {
  const { width, height } = document.body.getBoundingClientRect();

  canvasWidth = width - margin.right - margin.left;
  canvasHeight = height - margin.top - margin.bottom;

  return { canvasWidth, canvasHeight };
};

const zooms = function (e) {
  const transform = e.transform;
  const scale = transform.k,
    tbound = -canvasHeight * scale,
    bbound = canvasHeight * scale,
    lbound = -canvasWidth * scale,
    rbound = canvasWidth * scale;

  const currentTranslation = [margin.left, margin.top];

  const translation = [
    currentTranslation[0] + Math.max(Math.min(transform.x, rbound), lbound),
    currentTranslation[1] + Math.max(Math.min(transform.y, bbound), tbound),
  ];

  select(".canvas").attr(
    "transform",
    "translate(" + translation + ")" + " scale(" + scale + ")"
  );
};

const renderTree = function (svg, canvasWidth, canvasHeight, zoomer) {
  let scale = 1;
  const levelsWide = 9;
  const levelsHigh = 9;
  const nodeRadius = 10;
  const dx = (window.innerWidth / levelsWide) * scale;
  const dy = (window.innerHeight / levelsHigh) * scale;
  const handleEvents = function (selection) {
    selection
      .on("click", function (event, node) {
        const g = select(this);
        const c = g.selectAll(".the-node circle");
        const nodeId = node.data.name;

        const storedNode = NodeStore.filterById(nodeId)[0];
        const currentStatus = parseTreeValues(node.data.value).status;
        HabitStore.runCurrentFilterById(nodeId);

        const requestBody = storedNode
          ? Object.assign(storedNode, {
              completed_status: oppositeStatus(currentStatus),
            })
          : JSON.stringify({
              habit_id: HabitStore.current().id,
              date_id: DateStore.current().id,
              completed_status: oppositeStatus(currentStatus),
            });
        storedNode
          ? NodeStore.runReplace(nodeId, requestBody)
          : NodeStore.submit(requestBody);

        c.style("fill", currentStatus === "false" ? positiveCol : negativeCol);
        c.attr("class", "active");

        clickedZoom(event, this);
      })
      .on("mouseover", function () {
        const g = select(this);
        g.select(".label")
          .transition()
          .duration(750)
          .ease(easeLinear)
          .style("opacity", "1");
      })
      .on("mouseout", function () {
        const g = select(this);
        g.select(".label")
          .transition()
          .duration(750)
          .ease(easeLinear)
          .style("opacity", "0");
      });
    function clickedZoom(e, that) {
      if (e.defaultPrevented) return; // panning, not clicking
      const transform = getTransform(that, clickScale);
      canvas
        .transition()
        .duration(1000)
        .attr(
          "transform",
          "translate(" + transform.translate + ")scale(" + transform.scale + ")"
        );
      console.log(transform);
      zoomer.scaleBy(transform.scale).translateBy(transform.translate);
      scale = transform.scale;
    }
  };
  const getTransform = function (node, xScale) {
    var bx = node.__data__.x + zoomed.vx;
    var by = node.__data__.y + zoomed.vy;
    var bw = zoomed.vw;
    var bh = zoomed.vh;
    var tx = -bx * xScale + vx - bw / 2;
    var ty = -by * xScale + vy - bh / 2;
    console.log(dx);
    console.log(dy);
    svg.attr(
      "viewBox",
      `${-(canvasWidth / 2) + bw / 2 - bx} ` +
        `${-canvasHeight / 2 + bh / 2 - bh} ` +
        `${zoomed.vw} ${zoomed.vh}`
    );
    debugger;
    return { translate: [0, 0], scale: xScale };
  };
  const reset = function () {
    scale = 1.0;
    canvas.attr("transform", "translate(0,0)scale(1,1)");
    zoomer.scaleBy(scale).translateBy([0, 0]);
  };

  var bbox, vx, vy, vw, vh, defaultView;
  var clickScale = 3;
  vw = canvasWidth * 3;
  vh = canvasHeight * 3;
  vx = 0;
  vy = 0;
  var zoomed = {};
  zoomed.vw = dx * 3;
  zoomed.vh = dy * 3;
  zoomed.vx = 0;
  zoomed.vy = 0;
  var defaultView = `${vx} ${vy} ${vw} ${vh}`;

  svg.selectAll("*").remove();
  const canvas = svg
    .append("g")
    .classed("canvas", true)
    .attr("transform", `translate(${margin.left},${margin.top})`);

  canvas
    .append("rect")
    .attr("fill", "transparent")
    .attr("stroke", "black")
    .attr("width", vw)
    .attr("height", vh)
    .attr("x", vx)
    .attr("y", vy);

  svg
    .attr("viewBox", defaultView)
    .attr("preserveAspectRatio", "xMidYMid meet")
    .call(zoomer)
    .on("wheel", (event) => event.preventDefault());

  const rootData = TreeStore.root();
  const treeLayout = tree().size(canvasWidth, canvasHeight).nodeSize([dy, dx]);
  treeLayout(rootData);

  const gLink = canvas
    .append("g")
    .classed("links", true)
    .attr("transform", `translate(${vw / 2},${0})`);
  const gNode = canvas
    .append("g")
    .classed("nodes", true)
    .attr("transform", `translate(${vw / 2},${0})`);

  const links = gLink.selectAll("line.link").data(rootData.links());
  const enteringLinks = links
    .enter()
    .append("line")
    .classed("link", true)
    .attr("x1", (d) => d.source.x)
    .attr("y1", (d) => d.source.y)
    .attr("x2", (d) => d.target.x)
    .attr("y2", (d) => d.target.y);

  const nodes = gNode.selectAll("g.node").data(rootData.descendants());
  const enteringNodes = nodes
    .enter()
    .append("g")
    .classed("the-node solid", true)
    .style("fill", nodeStatusColours)
    .attr("transform", (d) => `translate(${d.x},${d.y})`)
    .call(handleEvents);
  gNode.selectAll(".the-node circle.active").on("click", reset);

  enteringNodes
    .append("text")
    .attr("class", "label")
    .attr("dx", 25)
    .attr("dy", 5)
    .style("opacity", "0")
    .text((d) => d.data.value);

  enteringNodes.append("circle").attr("r", nodeRadius);
};

const parseTreeValues = (valueString) => {
  const [splitValues, status] = valueString.split("-");
  const [, left, right] = splitValues.split(/\D/);
  return { left, right, status };
};

const oppositeStatus = (current) =>
  current === undefined || current === "true" ? "true" : "false";

const nodeStatusColours = (d) => {
  if (typeof d.data.value === undefined) return neutralCol;
  switch (parseTreeValues(d.data.value).status) {
    case "true":
      return positiveCol;
    case "false":
      return negativeCol;
    default:
      return neutralCol;
  }
};

const debounce = function (func, delay) {
  let timeout;
  return (...args) => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => func.apply(null, args), delay);
  };
};

export { d3visPageMaker, d3SetupCanvas, renderTree, zooms, debounce };
