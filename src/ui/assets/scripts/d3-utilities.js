import { select, tree, easeLinear, zoomIdentity } from "d3";
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
  let currentXTranslate = margin.left;
  let currentYTranslate = margin.top;

  svg.selectAll("*").remove();
  const canvas = svg
    .append("g")
    .classed("canvas", true)
    .attr("transform", `translate(${currentXTranslate},${currentYTranslate})`);
  let scale = 1.0;
  let clickScale = 3;
  const zoomBase = canvas;
  // .transition()
  // .ease(easeLinear)
  // .duration(1000);
  const levelsWide = 9;
  const levelsHigh = 9;
  const nodeRadius = 10;
  const dx = (window.innerWidth / levelsWide) * scale;
  const dy = (window.innerHeight / levelsHigh) * scale;
  let viewportX, viewportY, viewportW, viewportH, defaultView;
  let zoomed = {};

  const calibrateViewPort = function () {
    viewportW = canvasWidth * 3;
    viewportH = canvasHeight * 3;
    viewportX = 0;
    viewportY = 0;
    zoomed.translateX = -3 * (viewportW / 2);
    zoomed.translateY = -3 * (viewportH / 2);
    zoomed.viewportW = scale * viewportW;
    zoomed.viewportH = scale * viewportH;
    defaultView = `${viewportX} ${viewportY} ${viewportW} ${viewportH}`;
  };

  const reset = function () {
    scale = 1.0;
    svg.attr("viewBox", defaultView);
    zoomBase.call(zoomer.transform, zoomIdentity);
  };

  const handleEvents = function (selection) {
    selection
      .on("click", function (event, node) {
        if (event.target.classList.contains("active")) {
          event.target.classList.remove("active");
          reset();
          return;
        }
        const g = select(this);
        const c = g.selectAll(".the-node circle");

        if (node.data.value) handleStatusToggle(c, node);
        clickedZoom(event, this);
      })
      .on("mouseover", function () {
        const g = select(this);
        g.select(".label").transition().duration(750).style("opacity", "1");
      })
      .on("mouseout", function () {
        const g = select(this);
        g.select(".label").transition().duration(750).style("opacity", "0");
      });

    function handleStatusToggle(circle, node) {
      const nodeId = node.data.name;
      const storedNode = NodeStore.filterById(nodeId)[0];
      HabitStore.runCurrentFilterById(nodeId);

      const currentStatus = parseTreeValues(node.data.value).status;
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
      circle.style(
        "fill",
        currentStatus === "false" ? positiveCol : negativeCol
      );
      circle.attr("class", "active");
    }

    function clickedZoom(e, that) {
      if (e.defaultPrevented) return; // panning, not clicking
      const transformer = getTransform(that, clickScale);
      scale = transformer.scale;
      reset();
      zoomBase.call(zoomer.translateBy, ...transformer.translate);
      zoomBase.call(zoomer.scaleTo, transformer.scale);
      select(".canvas").attr(
        "transform",
        "translate(" +
          transformer.translate[0] +
          ", " +
          transformer.translate[1] +
          ")scale(" +
          transformer.scale +
          ")"
      );
    }

    const getTransform = function (node, xScale) {
      var bx = node.__data__.x * xScale;
      var by = node.__data__.y * xScale;
      var bw = zoomed.viewportW;
      var tx = bx - viewportW;
      var ty = -by;
      console.log(tx, "TX");
      console.log(bx, "bX");
      console.log(bw, "bw");
      return { translate: [tx, ty], scale: xScale };
    };
  };

  calibrateViewPort();
  reset();
  // svg.selectAll("*").remove();

  const viewBoxOutline = canvas
    .append("rect")
    .attr("fill", "transparent")
    .attr("stroke", "black")
    .attr("width", viewportW)
    .attr("height", viewportH)
    .attr("x", viewportX)
    .attr("y", viewportY);

  svg
    .attr("viewBox", defaultView)
    .attr("preserveAspectRatio", "none")
    .call(zoomer)
    .on("wheel", (event) => event.preventDefault());

  const rootData = TreeStore.root();
  const treeLayout = tree().size(canvasWidth, canvasHeight).nodeSize([dy, dx]);
  treeLayout(rootData);

  debugger;
  const gLink = canvas
    .append("g")
    .classed("links", true)
    .attr("transform", `translate(${viewportW / 2},${scale})`);
  const gNode = canvas
    .append("g")
    .classed("nodes", true)
    .attr("transform", `translate(${viewportW / 2},${scale})`);

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

  enteringNodes
    .append("text")
    .attr("class", "label")
    .attr("dx", 25)
    .attr("dy", 5)
    .style("opacity", "0")
    .text((d) => d.data.value);

  enteringNodes.append("circle").attr("r", nodeRadius);
};

function collapseTree() {
  console.log(TreeStore.root());
  collapse(TreeStore.root());
  console.log(TreeStore.root());
}

function expand(d) {
  var children = d.children ? d.children : d._children;
  if (d._children) {
    d.children = d._children;
    d._children = null;
  }
  if (children) children.forEach(expand);
}
function collapse(d) {
  if (d.children) {
    d._children = d.children;
    d._children.forEach(collapse);
    d.children = null;
  }
}

const parseTreeValues = (valueString) => {
  if (typeof valueString === "undefined") return;
  let splitValues, status, left, right;
  try {
    [splitValues, status] = valueString.split("-");
    [, left, right] = splitValues.split(/\D/);

    return { left, right, status };
  } catch {
    console.log(valueString);
  }
};

const oppositeStatus = (current) =>
  current === "undefined" || current === "true" ? "true" : "false";

const nodeStatusColours = (d) => {
  const datumValues = parseTreeValues(d.data.value);
  if (typeof d === "undefined" || typeof datumValues === "undefined")
    return neutralCol;
  switch (datumValues.status) {
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

export {
  d3visPageMaker,
  d3SetupCanvas,
  renderTree,
  collapseTree,
  zooms,
  debounce,
};
