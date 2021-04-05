import { select, tree, zoom } from "d3";

import TreeStore from "../../store/habit-tree-store";

let canvasHeight, canvasWidth;
const margin = {
  top: 50,
  right: 0,
  bottom: 50,
  left: 0,
};

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

  const currentTranslation = [margin.left + canvasWidth / 2, margin.top];

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
  svg.selectAll("*").remove();

  const canvas = svg
    .call(zoomer)
    .on("wheel", (event) => event.preventDefault())
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
        const n = g.selectAll("circle");
        const l = g.selectAll("text.label");
        HabitStore.runCurrentFilterByNode(node.data.name);
        let storedNode = NodeStore.filterById(node.data.name)[0];
        let currentStatus = parseValues(node.data.value).status;

        let requestBody = storedNode
          ? Object.assign(storedNode, {
              completed_status: oppositeStatus(currentStatus),
            })
          : JSON.stringify({
              habit_id: HabitStore.current().id,
              date_id: DateStore.current().id,
              completed_status: oppositeStatus(currentStatus),
            });
        storedNode
          ? NodeStore.runReplace(node.data.name, requestBody)
          : NodeStore.submit(requestBody);

        n.style("fill", currentStatus === "false" ? "#93cc96" : "#f2aa53");
        l.style("fill", currentStatus === "false" ? "#93cc96" : "#f2aa53");
      })
      .on("mouseover", function () {
        const g = select(this);
        g.select(".label").transition().duration(700).style("opacity", "1");
      })
      .on("mouseout", function () {
        const g = select(this);
        g.select(".label").transition().duration(700).style("opacity", "0");
      });
  };

  const scaleFactor = 1;
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
  const treeLayout = tree().size(canvasWidth, canvasHeight).nodeSize([dy, dx]);

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
};

const parseTreeValues = (valueString) => {
  const [splitValues, status] = valueString.split("-");
  const [, left, right] = splitValues.split(/\D/);
  return { left, right, status };
};

const oppositeStatus = (current) =>
  current === undefined || current === "true" ? "true" : "false";

const nodeStatusColours = (d) => {
  if (typeof d.data.value === undefined) return "#898989";
  switch (parseTreeValues(d.data.value).status) {
    case "true":
      return "#93cc96";
    case "false":
      return "#f2aa53";
    default:
      return "#898989";
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
