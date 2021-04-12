import { select, tree, easeCircleOut, zoomIdentity, linkVertical, scaleOrdinal } from "d3";
import TreeStore from "../../store/habit-tree-store";
import NodeStore from "../../store/habit-node-store";
import DateStore from "../../store/date-store";
import HabitStore from "../../store/habit-store";
import HabitDateStore from "../../store/habit-date-store";
import { legendColor } from "d3-svg-legend";

let canvasHeight, canvasWidth;
const margin = {
  top: 30,
  right: 0,
  bottom: 20,
  left: 0,
};

const positiveCol = "#93cc96";
const negativeCol = "#f2aa53";
const noNodeCol = "#634a36";
const neutralCol = "#888";

const d3visPageMaker = function (layout, component, spinnerState, formNeeded) {
  const page = {};

  // Create a visualisation-containing div element with random ID
  const divId = `svg_container_${Math.floor(Math.random() * 1000000000)}${1}`;

  page.view = () => {
    // Pass unique selection id to the vis component for d3 selection
    const d3Container = m("div", { id: divId });

    return m(
      layout,
      { spinnerState: spinnerState, formNeeded: formNeeded },
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
    console.log("Could not accumulate.");
  }
};

const makePatchOrPutRequest = function (isDemo, currentStatus) {
  const requestBody = {
    habit_id: HabitStore.current().id,
    date_id: DateStore.current().id,
    completed_status: oppositeStatus(currentStatus),
  };
  return HabitDateStore.runUpdate(isDemo, requestBody);
};

const renderTree = function (
  svg,
  isDemo,
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

  // SETTINGS
  let scale = isDemo ? 2 : 2.4;
  let clickScale = 3;
  const zoomBase = canvas;
  const levelsWide = 6;
  const levelsHigh = 3; 
  const nodeRadius = 15 * scale;
  const dx = (window.innerWidth / levelsWide) * scale/3;
  const dy =
    (window.innerHeight / levelsHigh) * (isDemo ? scale / 3 : scale ** 2);

  let viewportX, viewportY, viewportW, viewportH, defaultView;
  let zoomed = {};
  let activeNode;
  let ordinal = scaleOrdinal()
    .domain(["Completed", "Not Yet Tracked", "Incomplete", "No Record for Day"])
    .range(
      [positiveCol, neutralCol, negativeCol, noNodeCol]);

  const calibrateViewPort = function () {
    viewportX = 0;
    viewportY = 100;
    viewportW = canvasWidth * 3;
    viewportH = canvasHeight * 2;
    zoomed.translateX = -3 * (viewportW / 2);
    zoomed.translateY = -3 * (viewportH / 2);
    zoomed.viewportW = scale * viewportW;
    zoomed.viewportH = scale * viewportH;
    defaultView = `${viewportX} ${viewportY} ${viewportW} ${viewportH}`;
  };

  const reset = function () {
    scale = isDemo ? 2 : 2.4;
    svg.attr("viewBox", defaultView);
    expandTree();
    activeNode = null;
    document.querySelector(".the-node.active") && document.querySelector(".the-node.active").classList.remove("active");
    zoomBase.call(zoomer.transform, zoomIdentity);
  };

  const collapseAroundAndUnder = function (node) {
    let minExpandedDepth = node.depth + 3;
    // For collapsing the nodes 'two levels lower' than selected
    let descendantsToCollapse = node
      .descendants()
      .filter((n) => n.depth == minExpandedDepth);

    // For collapsing cousin nodes (saving width)
    let cousins = TreeStore.root()
      .descendants()
      .filter((n) => n.depth == node.depth && n !== node);
    descendantsToCollapse.forEach(collapse);
    cousins.forEach(collapse);
  };

  const handleEvents = function (selection) {
    selection.on("dblclick", function (event, node) {
      const c = select(this).selectAll(".the-node circle");
      if (node.data.content !== undefined) handleStatusToggle(c, node);
      node.content = null; // Stop active class addition
      renderTree(svg, isDemo, canvasWidth, canvasHeight, zoomer, {
        event,
        node,
      });
    });
    selection
      .on("contextmenu", function (event, node) {
        event.preventDefault();
        const c = select(this).selectAll(".the-node circle");
        if (node.data.content !== undefined) handleStatusToggle(c, node);
        renderTree(svg, isDemo, canvasWidth, canvasHeight, zoomer, {
          event,
          node,
          content: node.data.content,
        });
      });
    selection
      .on("click", function (event, node) {
        const targ = event.target;
        if (targ.tagName == "circle") {
          const c = select(this).selectAll(".the-node circle");
          if (node.data.content !== undefined) handleStatusToggle(c, node);

          if (targ.closest(".the-node").classList.contains("active")) {
            targ.closest(".the-node").classList.remove("active");
            reset();
            return;
          }
          expand(node);
          collapseAroundAndUnder(node);
          renderTree(svg, isDemo, canvasWidth, canvasHeight, zoomer, {
            event,
            node,
            content: node.data.content,
          });
          if (zoomClicked === undefined) clickedZoom(event, this);
        }
      })
      .on("mouseover", function () {
        const g = select(this);
        g.select(".tooltip").transition().duration(250).style("opacity", "1");
      })
      .on("mouseout", function () {
        const g = select(this);
        g.select(".tooltip").transition().duration(250).style("opacity", "0");
      });

    function handleStatusToggle(circle, node) {
      if (!rootData.leaves().includes(node)) return; // Non-leaf nodes have generated
      const nodeContent = parseTreeValues(node.data.content);
      NodeStore.runCurrentFilterByMptt(nodeContent.left, nodeContent.right);

      const currentStatus = parseTreeValues(node.data.content).status;
      node.data.content = node.data.content.replace(
        /true|false/,
        oppositeStatus(currentStatus)
      );
      circle.style( "fill", currentStatus === "false" ? positiveCol : negativeCol );

      const nodeId = NodeStore.current().id;
      HabitStore.runCurrentFilterByNode(nodeId);
      if(!node.data.name.includes("Sub-Habit")) {
        // If this was not a 'ternarising' sub habit that we created for more even distribution
        makePatchOrPutRequest(isDemo, currentStatus)
      };
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
  console.log(rootData);
  rootData.sum((d) => {
    // Return a binary interpretation of whether the habit was completed that day
    const thisNode = rootData.descendants().find((node) => node.data == d);
    return +JSON.parse(parseTreeValues(thisNode.data.content).status);
  });

  while (rootData.descendants().some((node) => node.value > 1)) {
    // Convert node values to binary based on whether their descendant nodes are all completed
    rootData.each((node) => {
      if (node.value > 0) {
        node.value = cumulativeValue(node);
      }
    });
  }

  const treeLayout = tree().size(canvasWidth, canvasHeight).nodeSize([dy, dx]);
  treeLayout(rootData);

  // Re-fire the click event for habit-status changes and find the active node
  if (typeof zoomClicked !== "undefined") {
    clickedZoom(zoomClicked.event, zoomClicked.node);

    rootData.each((n) => {
      if (zoomClicked.content && 
        n.data.content.split("-").slice(0, 1)[0] ==
        zoomClicked.content.split("-").slice(0, 1)[0]
      ) {
        activeNode = n;
      }
    });
  }
  const gLink = canvas
    .append("g")
    .classed("links", true)
    .attr("transform", `translate(${viewportW / 2},${scale})`);
  const gNode = canvas
    .append("g")
    .classed("nodes", true)
    .attr("transform", `translate(${viewportW / 2},${scale})`);

    svg
      .append("g")
      .attr("class", "legend")
      .attr("transform", "translate(50,-200)");

    // Borrowing the habit label for the legend
    let habitLabelValue;
    let habitLabel = document.getElementById("current-habit");
    let habitSpan = habitLabel.nextElementSibling;

    const colorLegend = legendColor()
      .labels(['', '', '', '', '']).orient("horizontal")
      .labels(['', '', '', '', '']).orient("horizontal")
      .shape("circle")
      .shapeRadius(50)
      .shapePadding(-5)
      .on("cellover", function (d) {
        habitLabel.textContent = "Key:";
        habitLabelValue = habitSpan.textContent;
        habitSpan.textContent = d.target.__data__;
      })
      .on("cellout", function (d) {
        habitLabel.textContent = "Selected:";
        habitSpan.textContent = d.target.__data__;
        habitSpan.textContent = habitLabelValue;
      })
      .scale(ordinal);

    svg.select(".legend").call(colorLegend);

  const links = gLink.selectAll("line.link").data(rootData.links());

  const enteringLinks = links
    .enter()
    .append("path")
    .classed("link", true)
    .attr("stroke-opacity", (d) =>
    activeNode && activeNode.descendants().includes(d.source) ? 0.5 : 0.2
    )
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
    .attr("class", (d) =>
      activeNode && d.data.content === activeNode.data.content
        ? "the-node solid active"
        : "the-node solid"
    )
    .style("fill", nodeStatusColours)
    .style("opacity", (d) =>
      !activeNode || activeNode && d.ancestors().includes(activeNode)
        ? "1"
        : "0.25"
    )
    .style("stroke-width", (d) =>
      activeNode !== undefined && d.ancestors().includes(activeNode)
        ? "2px"
        : "0"
    )
    .attr("transform", (d) => `translate(${d.x},${d.y})`)
    .call(handleEvents);
    
  enteringNodes.append("circle").attr("r", nodeRadius);
  const gTooltip = enteringNodes
    .append("g")
    .classed("tooltip", true)
    .attr(
      "transform",
      `translate(${nodeRadius/2 * scale}, ${-(
        scale * 2 * nodeRadius +
        (isDemo ? 0 : -100)
      )})`
    )
    .attr("opacity", "0");
  enteringNodes
    .append("text")
    .attr("class", "label right")
    .attr("dx", 35)
    .attr("dy", 5)
    .text((d) => parseTreeValues(d.data.content).right);

  enteringNodes //VALUE label
    .append("text")
    .attr("class", "label")
    .attr("dx", 45)
    .attr("dy", -25)
    .style("fill", "pink")
    .text((d) => {
      return d.value;
    });

  enteringNodes
    .append("text")
    .attr("class", "label")
    .attr("dx", 5)
    .attr("dy", 25)
    .style("fill", "green")
    .text(cumulativeValue);
  gTooltip
    .append("rect")
    .attr("width", 25)
    .attr("height", 25)
    .attr("x", -5)
    .attr("y", 78);

  gTooltip
    .append("rect")
    .attr("width", 200)
    .attr("height", 100)
    .attr("rx", nodeRadius / 2);

  // Split the name label into two parts:
  gTooltip
    .append("text")
    .attr("x", 10)
    .attr("y", 25)
    .text((d) => {
      const words = d.data.name.split(" ").slice(0, 6);
      return `${words[0] || ""} ${words[1] || ""} ${words[2] || ""} ${
        words[3] || ""
      }`;
    });
  gTooltip
    .append("text")
    .attr("x", 15)
    .attr("x", 75)
    .text((d) => d.data.content)
  gTooltip
    .append("text")
    .attr("x", 15)
    .attr("y", 55)
    .text((d) => {
      const allWords = d.data.name.split(" ");
      const words = allWords.slice(0, 6);
      return `${words[4] || ""} ${words[5] || ""} ${words[6] || ""} ${
        allWords.length > 7 ? "..." : ""
      }`;
    });

  const gButton = gTooltip
    .append("g")
    .classed("habit-label-dash-button", true)

    .attr("transform", `translate(${108}, ${65})`);

  gButton
    .append("rect")
    .attr("rx", nodeRadius / 2)
    .attr("width", 80)
    .attr("height", 30)
    .on("click", (e) => {
      e.stopPropagation();
    });
  gButton
    .append("text")
    .attr("x", 10)
    .attr("y", 20)
    .text((d) => "DETAILS")
    .on("click", (e, n) => {
      HabitStore.current(HabitStore.filterByName(n.data.name)[0]);
      m.route.set(
        m.route.param("demo") ? "/habits/list?demo=true" : "/habits/list"
      );
    });
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
  const status = parseTreeValues(d.data.content).status;
  switch (cumulativeValue(d)) {
    case 1:
      return positiveCol;
    case 0:
      if (status === "") return noNodeCol;
      return status === "false" ? negativeCol : neutralCol;
    default:
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
  expandTree,
  zooms,
  debounce,
  positiveCol,
  neutralCol,
  negativeCol,
  noNodeCol,
  makePatchOrPutRequest
};
