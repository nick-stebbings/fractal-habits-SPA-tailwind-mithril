import {
  select,
  tree,
  easeCircleOut,
  path,
  zoomIdentity,
  linkVertical,
} from "d3";
import TreeStore from "../../store/habit-tree-store";
import NodeStore from "../../store/habit-node-store";
import DateStore from "../../store/date-store";
import HabitStore from "../../store/habit-store";
import HabitDateStore from "../../store/habit-date-store";

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

const d3visPageMaker = function (layout, component, spinnerState) {
  const page = {};

  // Create a visualisation-containing div element with random ID
  const divId = `svg_container_${Math.floor(Math.random() * 1000000000)}${1}`;

  page.view = () => {
    // Pass unique selection id to the vis component for d3 selection
    const d3Container = m("div", { id: divId });

    return m(
      layout,
      { spinnerState: spinnerState },
      m(component, { divId }, d3Container)
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

const sumChildrenValues = (node) =>
  node.children.reduce((sum, n) => sum + n.value, 0);

const cumulativeValue = (node) => {
  try {
    return node && node.children
      ? +(sumChildrenValues(node) === node.children.length)
      : +JSON.parse(parseTreeValues(node.data.content).status || 0);
  } catch (err) {
    debugger;
    console.log("Could not accumulate.");
  }
};

const renderTree = function (
  svg,
  canvasWidth,
  canvasHeight,
  zoomer,
  zoomClicked
) {
  let currentXTranslate = margin.left;
  let currentYTranslate = margin.top;

  svg.selectAll("*").remove();
  const canvas = svg
    .append("g")
    .classed("canvas", true)
    .attr("transform", `translate(${currentXTranslate},${currentYTranslate})`);

  let scale = 0.75;
  let clickScale = 3;
  const zoomBase = canvas;
  const levelsWide = 12;
  const levelsHigh = 3;
  const nodeRadius = 15 * scale;
  const dy = (window.innerWidth / levelsWide) * scale;
  const dx = (window.innerHeight / levelsHigh) * scale ** 2;
  let viewportX, viewportY, viewportW, viewportH, defaultView;
  let zoomed = {};

  const calibrateViewPort = function () {
    viewportX = 0;
    viewportY = 0;
    viewportW = canvasWidth * 3;
    viewportH = canvasHeight * 3;
    zoomed.translateX = -3 * (viewportW / 2);
    zoomed.translateY = -3 * (viewportH / 2);
    zoomed.viewportW = scale * viewportW;
    zoomed.viewportH = scale * viewportH;
    defaultView = `${viewportX} ${viewportY} ${viewportW} ${viewportH}`;
  };

  const reset = function () {
    scale = 1.0;
    svg.attr("viewBox", defaultView);
    expandTree();
    zoomBase.call(zoomer.transform, zoomIdentity);
  };

  const collapseAroundAndUnder = function (node) {
    let minExpandedDepth = node.depth + 3;
    let descendantsToCollapse = node
      .descendants()
      .filter((n) => n.depth == minExpandedDepth);
    let siblings = TreeStore.root()
      .descendants()
      .filter((n) => n.depth == node.depth && n !== node);
    descendantsToCollapse.forEach(collapse);
    siblings.forEach(collapse);
  };

  const highlightSubtree = function (node) {
    //TODO
    node.descendants().forEach((n) => {});
  };

  const handleEvents = function (selection) {
    selection
      .on("click", function (event, node) {
        const c = select(this).selectAll(".the-node circle");
        if (node.data.content !== "undefined") handleStatusToggle(c, node);

        if (event.target.classList.contains("active")) {
          event.target.classList.remove("active");
          reset();
          return;
        }
        collapseAroundAndUnder(node) &&
          renderTree(svg, canvasWidth, canvasHeight, zoomer, { event, node });
        highlightSubtree(node);
        if (typeof zoomClicked === "undefined") clickedZoom(event, this);
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
      if (!rootData.leaves().includes(node)) return; // Non-leaf nodes have generated
      const nodeId = node.data.name;

      const currentStatus = parseTreeValues(node.data.content).status;
      node.data.content = node.data.content.replace(
        /true|false/,
        oppositeStatus(currentStatus)
      );
      circle.style(
        "fill",
        currentStatus === "false" ? positiveCol : negativeCol
      );
      makePatchOrPutRequest(nodeId, currentStatus);
    }

    function makePatchOrPutRequest(nodeId, currentStatus) {
      console.log(nodeId);
      HabitStore.runCurrentFilterByNode(nodeId);
      let a = HabitStore.current();

      const requestBody = JSON.stringify({
        habit_id: HabitStore.current().id,
        date_id: DateStore.current().id,
        completed_status: oppositeStatus(currentStatus),
      });
      HabitDateStore.runUpdate(nodeId, requestBody);
    }
  };
  const getTransform = function (node, xScale) {
    if (typeof node === "undefined") return;
    var x = node.__data__ ? node.__data__.x : node.x;
    var y = node.__data__ ? node.__data__.y : node.y;
    var bx = x * xScale;
    var by = y * xScale;
    var tx = -bx - viewportW;
    var ty = -by;
    return { translate: [tx, ty], scale: xScale };
  };

  function clickedZoom(e, that) {
    if (e.defaultPrevented || typeof that === "undefined") return; // panning, not clicking
    const transformer = getTransform(that, clickScale);
    scale = transformer.scale;
    select(".canvas")
      .transition()
      .ease(easeCircleOut)
      .duration(1500)
      .attr(
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

  calibrateViewPort();
  svg
    .attr("viewBox", defaultView)
    .attr("preserveAspectRatio", "xMidYMid meet")
    .call(zoomer)
    .on("wheel", (event) => event.preventDefault());

  const rootData = TreeStore.root();
  const treeLayout = tree().size(canvasWidth, canvasHeight).nodeSize([dy, dx]);

  if (m.route.param("demo")) {
    rootData.sum((d) => {
      const thisNode = rootData.descendants().find((node) => node.data == d);
      return +JSON.parse(parseTreeValues(thisNode.data.content).status);
    });
    while (rootData.descendants().some((node) => node.value > 1)) {
      rootData.each((node) => {
        if (node.value > 1) {
          node.value = cumulativeValue(node);
        }
      });
    }
  }

  console.log(rootData);
  treeLayout(rootData);

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
    .append("path")
    .classed("link", true)
    .attr(
      "d",
      linkVertical()
        .x((d) => d.x)
        .y((d) => d.y)
    );

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
    .attr("class", "label left")
    .attr("dx", -35)
    .attr("dy", 5)
    .text((d) => parseTreeValues(d.data.content).left);

  enteringNodes
    .append("text")
    .attr("class", "label right")
    .attr("dx", 15)
    .attr("dy", 5)
    .text((d) => parseTreeValues(d.data.content).right);

  // enteringNodes //VALUE label
  //   .append("text")
  //   .attr("class", "label")
  //   .attr("dx", 15)
  //   .attr("dy", 25)
  //   .style("fill", "pink")
  //   .text((d) => d.value);
  enteringNodes
    .append("text")
    .attr("class", "label")
    .attr("dx", 5)
    .attr("dy", 25)
    .style("fill", "green")
    .text(cumulativeValue);

  enteringNodes.append("circle").attr("r", nodeRadius);

  // Re-fire the click event for habit-status changes
  typeof zoomClicked !== "undefined" &&
    clickedZoom(zoomClicked.event, zoomClicked.node);
};

function expandTree() {
  expand(TreeStore.root());
}

function collapseTree() {
  collapse(TreeStore.root());
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
    console.log(valueString, "Error Parsing");
  }
};

const oppositeStatus = (current) =>
  current === "undefined" || current === "false" ? "true" : "false";

const nodeStatusColours = (d) => {
  if (typeof d === "undefined" || typeof d.data.content === "undefined")
    return neutralCol;
  switch (cumulativeValue(d)) {
    case 1:
      return positiveCol;
    case 0:
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
