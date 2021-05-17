import { select } from "d3-selection"
import { scaleOrdinal, scaleLinear } from "d3-scale";
import { zoomIdentity } from "d3-zoom";
import { linkVertical } from "d3-shape";
import { tree } from "d3-hierarchy";
import { easeCircleOut } from "d3-ease";
import { legendColor } from "d3-svg-legend";
import { openModal } from "./animations";

import TreeStore from "../../store/habit-tree-store";
import NodeStore from "../../store/habit-node-store";
import DateStore from "../../store/date-store";
import HabitStore from "../../store/habit-store";
import DomainStore from "../../store/domain-store";
import HabitDateStore from "../../store/habit-date-store";

let canvasHeight, canvasWidth;
const margin = {
  top: 50,
  right: 0,
  bottom: 20,
  left: 0,
};

let modalType;
const positiveCol = "#93cc96";
const negativeCol = "#f2aa53";
const noNodeCol = "#634a36";
const neutralCol = "#888";

const d3visPageMaker = function (layout, component, spinnerState, modalType) {
  const page = {};

  // Create a visualisation-containing div element with random ID
  const divId = `svg_container_${Math.floor(Math.random() * 1000000000)}${1}`;

  page.view = () => {
    // Pass unique selection id to the vis component for d3 selection
    const d3Container = m("div", { id: divId }, [
      m("svg.legendSvg", { class: "top-26 lg:top-20 w-36 fixed left-4 h-12" }),
      m("svg.controlsSvg", {
        class: "top-20 w-72 fixed right-0 h-16 hidden md:block",
      }),
    ]);

    return m(
      layout,
      { spinnerState: spinnerState, modalType: modalType },
      m(component, { divId, modalType }, d3Container)
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

const addLegend = (svg) => {
  const ordinal = scaleOrdinal()
    .domain(["Completed", "Not Yet Tracked", "Incomplete", "No Record for Day"])
    .range([positiveCol, neutralCol, negativeCol, noNodeCol]);

  const legendSvg = select("svg.legendSvg");
  const controlsSvg = select("svg.controlsSvg");
  const gText = controlsSvg.append("g").attr("class", "controls")
    .attr("transform", "translate(265, 30) scale(0.8)");
  const gLegend = legendSvg.append("g").attr("class", "legend")
    .attr("transform", "translate(25, 20) scale(2)");

  // Borrowing the habit label for the legend
  let habitLabelValue;
  let habitLabelValueSm;
  let habitLabel = document.getElementById("current-habit");
  let habitSpan = habitLabel.nextElementSibling;
  let habitLabelSm = document.getElementById("current-habit-sm");
  let habitSpanSm = habitLabelSm.nextElementSibling;
  gText.append("text").text("L/Click ----> Habit Select");
  gText
    .append('text')
    .attr('y', 25)
    .text('R/Click --> Toggle Status');

  const colorLegend = legendColor()
    .labels(["", "", "", "", ""])
    .orient("horizontal")
    .labels(["", "", "", "", ""])
    .orient("horizontal")
    .shape("circle")
    .shapeRadius(10)
    .shapePadding(-5)
    .on("cellover", function (d) {
      habitLabel.textContent = "Key:";
      habitLabelValue = habitSpan.textContent;
      habitSpan.textContent = d.target.__data__;

      habitLabelSm.textContent = "Key:";
      habitLabelValueSm = habitSpanSm.textContent;
      habitSpanSm.textContent = d.target.__data__;
      showHabitLabel();
    })
    .on("cellout", function (d) {
      habitLabel.textContent = "Selected:";
      habitSpan.textContent = d.target.__data__;
      habitSpan.textContent = habitLabelValue;

      habitLabelSm.textContent = "Selected:";
      habitSpanSm.textContent = d.target.__data__;
      habitSpanSm.textContent = habitLabelValueSm;
    })
    .scale(ordinal);

  gLegend.call(colorLegend);
};

const setHabitLabel = (data) => { 
  document.getElementById("current-habit").nextElementSibling.textContent = data?.name 
  document.getElementById("current-habit-sm").nextElementSibling.textContent = data?.name 
};

const showHabitLabel = () =>
  (document.querySelector(".mask-wrapper").style.height = "6rem");

const zooms = function (e) {
  const transform = e.transform;
  const scale = transform.k,
    tbound = -canvasHeight * scale*3,
    bbound = canvasHeight * scale*3;

  const currentTranslation = [margin.left, margin.top];

  const translation = [
    currentTranslation[0] + transform.x,
    currentTranslation[1] + Math.max(Math.min(transform.y, bbound), tbound),
  ];

  select(".canvas").attr(
    "transform",
    "translate(" + translation + ")" + " scale(" + scale + ")"
  );
};

const deadNode = (event) =>
  event.target.__data__.data && parseTreeValues(event.target.__data__.data.content)
    ?.status == "";

const sumChildrenValues = (node) =>
  node.children.reduce((sum, n) => sum + n.value, 0);

const cumulativeValue = (node) => {
  const content = parseTreeValues(node.data.content).status;
  try {
    return node && node.children
      ? +(sumChildrenValues(node) >= node.children.length && node.children.every(n => cumulativeValue(n) === 1))
      : [undefined, "incomplete", false, ''].includes(content) ? 0 : 1;
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
  return HabitDateStore.runUpdate(isDemo, requestBody, DomainStore.current().id);
};

const renderTree = function (
  svg,
  isDemo,
  zoomer,
  zoomClicked,
  cW = canvasWidth,
  cH = canvasHeight,
  mType = modalType
) {
  let currentXTranslate = margin.left;
  let currentYTranslate = margin.top;
  canvasWidth = cW;
  canvasHeight = cH;
  modalType = mType;
  // TODO change this to private data once more than one vis is live

  svg.selectAll("*").remove();
  const canvas = svg
    .append("g")
    .classed("canvas", true)
    .attr("transform", `translate(${currentXTranslate},${currentYTranslate})`);

  let rootData = TreeStore.root();
  if (rootData.name === "") return;

  // SETTINGS
  let scale = isDemo ? 2 : 3;
  let clickScale = 3;
  const zoomBase = canvas;
  const levelsWide = canvasWidth < 600 || !!zoomClicked ? 2 : 6;
  const levelsHigh = canvasHeight < 600 || !!zoomClicked ? 2 : 3;
  const nodeRadius = 15 * scale;
  const dx = ((canvasWidth / levelsHigh) * scale) / clickScale;
  const dy = (canvasHeight / levelsWide) * (isDemo ? scale / 3 : 1);

  let viewportX, viewportY, viewportW, viewportH, defaultView;
  let zoomed = {};
  let activeNode;
  let currentTooltip;
  let currentButton;

  calibrateViewPort();
  svg
    .attr("viewBox", defaultView)
    .attr("preserveAspectRatio", "xMidYMid meet")
    .call(zoomer)
    .on("wheel", (event) => event.preventDefault());
  if (select("svg .legend").empty() && select("svg .controls").empty())
    addLegend();

  const contentEqual = (node, other) =>
    node.content.split("-").slice(0, 1)[0] ==
    other.content.split("-").slice(0, 1)[0];

  const setActiveNode = (clickedNode) => {
    activeNode = findNodeByContent(clickedNode);
    return activeNode
  };

  const findNodeByContent = (node) => {
    if (node === undefined || node.content === undefined) return;
    let found;
    rootData.each((n) => {
      if (contentEqual(n.data, node)) {
        found = n;
      }
    });
    return found;
  };

  // Re-fire the click event for habit-status changes and find the active node
  if (zoomClicked !== undefined) {
    if (zoomClicked.event !== undefined)
      clickedZoom(zoomClicked.event, zoomClicked.node);
    if (zoomClicked.content !== undefined)  { 
      setActiveNode(zoomClicked.content)
    };
  }

  const handleEvents = function (selection) {
    selection.on("contextmenu", function (event, node) {
      event.preventDefault();
      if (deadNode(event)) return reset();
      setActiveNode(node);
      renderTree(svg, isDemo, zoomer, {
        event,
        node,
        content: node.data,
        highlight: true,
      });
      handleStatusToggle(node);
      renderTree(svg, isDemo, zoomer);
    });
    selection
      .on("mousewheel.zoom", function (event, node) {
        if (event.deltaY >= 0|| deadNode(event)) return reset();

        setActiveNode(node.data);
        expand(node);
        collapseAroundAndUnder(node);

        updateCurrentHabit(node, false);
        renderTree(svg, isDemo, zoomer, {
          event,
          node,
          content: node.data,
        });
      })
      .on("click", function (event, node) {
        const targ = event.target;
        if (targ.tagName == "circle") {
          event.stopPropagation()
          if (targ.closest(".the-node").classList.contains("active") || deadNode(event)) return reset();
          setActiveNode(node.data);
          expand(node);
          node.children && node.children.forEach(childNode => {
            collapse(childNode)
          });
          updateCurrentHabit(node, false);
          // We don't want to zoomClick, just select the active subtree, so don't pass the event just enough to identify active node
          renderTree(svg, isDemo, zoomer, {
            event: undefined,
            node: undefined,
            content: node.data,
          });
          activeNodeAnimation();
          setHabitLabel(node.data);
          showHabitLabel();
        }
      })
      .on("mouseleave", function () {
        const g = select(this);
        g.select(".tooltip").transition().duration(250).style("opacity", "0");
        g.select(".habit-label-dash-button")
          .transition()
          .delay(1500)
          .duration(250)
          .style("opacity", "0");
        setTimeout(() => {
          currentButton = false;
        }, 100);
        setTimeout(() => {
          currentTooltip = false;
        }, 500);
      });

    function handleStatusToggle(node) {
      if (!rootData.leaves().includes(node) || node._children) return; // Non-leaf nodes have auto-generated cumulative status
      const nodeContent = parseTreeValues(node.data.content);
      NodeStore.runCurrentFilterByMptt(nodeContent.left, nodeContent.right);
      HabitStore.runCurrentFilterByNode(NodeStore.current().id);

      const currentStatus = nodeContent.status;
      node.data.content = node.data.content.replace(
        /true|false|incomplete/,
        oppositeStatus(currentStatus)
      );
      const nodeId = NodeStore.current().id;
      HabitStore.runCurrentFilterByNode(nodeId);
      if (!node.data.name.includes("Sub-Habit")) {
        // If this was not a 'ternarising' sub habit that we created for more even distribution
        makePatchOrPutRequest(isDemo, currentStatus);
      }
    }
  };

  const reset = function () {
    scale = isDemo ? 2 : 3;
    svg.attr("viewBox", defaultView);
    expandTree();
    activeNode = null;
    document.querySelector(".the-node.active") &&
      document.querySelector(".the-node.active").classList.remove("active");
    zoomBase.call(zoomer.transform, zoomIdentity);
  };

  const cousins = (node, root) =>
    root.descendants().filter((n) => n.depth == node.depth && n !== node);
  const greatAunts = (node, root) =>
    root.children.filter((n) => !node.ancestors().includes(n));

  const collapseAroundAndUnder = function (
    node,
    cousinCollapse = true,
    auntCollapse = true
  ) {
    let minExpandedDepth = node.depth + 3;
    // For collapsing the nodes 'two levels lower' than selected
    let descendantsToCollapse = node
      .descendants()
      .filter((n) => n.depth == minExpandedDepth);

    // For collapsing cousin nodes (saving width)
    let nodeCousins = [];
    if (cousinCollapse) {
      nodeCousins = cousins(node, rootData);
    }
    // For collapsing cousin nodes (saving width)
    let aunts = [];
    if (node.depth > 1 && auntCollapse && rootData.children) {
      aunts = greatAunts(node, rootData);
    }
    descendantsToCollapse.concat(nodeCousins).concat(aunts).forEach(collapse);
  };

  function calibrateViewPort() {
    viewportX = 0;
    viewportY = canvasHeight/10;
    viewportW = canvasWidth * 5;
    viewportH = canvasHeight * 5;
    zoomed.translateX = -3 * (viewportW / 2);
    zoomed.translateY = -3 * (viewportH / 2);
    zoomed.viewportW = scale * viewportW;
    zoomed.viewportH = scale * viewportH;
    defaultView = `${viewportX} ${viewportY} ${viewportW} ${viewportH}`;
  }

  function getTransform(node, xScale) {
    if (typeof node === "undefined") return;
    var x = node.__data__ ? node.__data__.x : node.x;
    var y = node.__data__ ? node.__data__.y : node.y;
    var bx = x * xScale;
    var by = y * xScale;
    var tx = -bx - viewportW;
    var ty = -by;
    return { translate: [tx, ty], scale: xScale };
  }

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

  function updateCurrentHabit(node, redraw = true) {
    const nodeContent = parseTreeValues(node.data.content);
    NodeStore.runCurrentFilterByMptt(nodeContent.left, nodeContent.right);
    HabitStore.current() && HabitStore.runCurrentFilterByNode(NodeStore.current()?.id);
    redraw && m.redraw();
  }

  rootData.sum((d) => {
    // Return a binary interpretation of whether the habit was completed that day
    const thisNode = rootData.descendants().find((node) => node.data == d);
    let content = parseTreeValues(thisNode.data.content);
    if (content.status === "incomplete" || content.status === "") return 0;
    const statusValue = JSON.parse(content.status);
    return +statusValue;
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
    .attr("stroke-opacity", (d) =>
      !activeNode || (activeNode && activeNode.descendants().includes(d.source))
        ? 0.5
        : 0.2
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
    .attr("class", (d) =>
      activeNode && d.data.content === activeNode.data.content
        ? "the-node solid active"
        : "the-node solid"
    )
    .style("fill", nodeStatusColours)
    .style("opacity", (d) => {
      if (!activeNode || (activeNode && d.ancestors().includes(activeNode)))
        return "1";
      return !zoomClicked ? "1" : "0.2";
    })
    .style("stroke-width", (d) =>
      activeNode !== undefined && d.ancestors().includes(activeNode)
        ? "2px"
        : "0"
    )
    .attr("transform", (d) => `translate(${d.x},${d.y})`)
    .call(handleEvents);

  const gCircle = enteringNodes.append("g");

  activeNode && activeNodeAnimation();

  gCircle
    .append("circle")
    .attr("r", nodeRadius)
    .on("mouseenter", (e, d) => {
      if(parseTreeValues(d.data.content).status === '') return;
      if (!currentTooltip) {
        svg.select("g.tooltip").transition();
        currentTooltip = svg.selectAll("g.tooltip").filter((t) => {
          return d == t;
        });
        currentTooltip.transition().duration(450).style("opacity", "1");
      }
      if (!currentButton) {
        svg.select("g.habit-label-dash-button").transition();
        currentButton = svg
          .selectAll("g.habit-label-dash-button")
          .filter((t) => {
            return d == t;
          });
        currentButton
          .transition()
          .delay(200)
          .duration(850)
          .style("opacity", "1");
      }
    });

  // Append circles and add hover event
  const gTooltip = enteringNodes
    .append("g")
    .classed("tooltip", true)
    .attr(
      "transform",
      `translate(${(nodeRadius / 2) * scale}, ${-(
        scale * 2 * nodeRadius +
        (isDemo ? -155 : -300)
      )}), scale(1.5)`
    )
    .attr("opacity", "0");

  gTooltip
    .append("rect")
    .attr("width", 25)
    .attr("height", 25)
    .attr("x", -5)
    .attr("y", -5);

  gTooltip
    .append("rect")
    .attr("width", 230)
    .attr("height", 60)
    .attr("rx", nodeRadius / 2);

  // Split the name label into two parts:
  gTooltip
    .append("text")
    .attr("x", 10)
    .attr("y", 20)
    .text((d) => {
      const words = d.data.name.split(" ").slice(0, 6);
      return `${words[0] || ""} ${words[1] || ""} ${words[2] || ""} ${
        words[3] || ""
      }`;
    });
  gTooltip
    .append("text")
    .attr("x", 15)
    .attr("y", 50)
    .text((d) => {
      const allWords = d.data.name.split(" ");
      const words = allWords.slice(0, 6);
      return `${words[4] || ""} ${words[5] || ""} ${words[6] || ""} ${
        allWords.length > 7 ? "..." : ""
      }`;
    });


    // MY LABELS
  enteringNodes
    .append("text")
    .attr("class", "label")
    .attr("dx", 5)
    .attr("dy", 25)
    .style("fill", "green")
    .text(cumulativeValue);
  enteringNodes //VALUE label
    .append("text")
    .attr("class", "label")
    .attr("dx", 45)
    .attr("dy", -25)
    .style("fill", "red")
    .text((d) => {
      return d.data.content;
    });
    
    //
    enteringNodes
      .append("g")
      .attr("transform", "translate(" + "-12" + "," + "35" + ") scale( 1.5 )")
      .append("path")
      .attr("class", "expand-arrow")
      .attr("d", (d) => {
        return d._children
          ? "M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
          : null;
      })
      .style("fill", "red");
    
  const gButton = gCircle
    .append("g")
    .classed("habit-label-dash-button", true)
    .attr("transform", `translate(${65}, ${isDemo ? 10 : 0})`)
    .attr("style", "opacity: 0");

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
      let currentId = HabitStore.current()?.id;
      m.route.set(
        m.route.param("demo") ? `/habits/list?demo=true` : `/habits/list`, { currentHabit: currentId }
      );
    });
  if (!isDemo) {
    gButton
      .append("rect")
      .attr("rx", nodeRadius / 2)
      .attr("x", 70)
      .attr("width", 80)
      .attr("height", 30)
      .on("click", (e) => {
        e.stopPropagation();
      });
    gButton
      .append("text")
      .attr("x", 80)
      .attr("y", 20)
      .text((d) => "APPEND")
      .on("click", (e, n) => {
        openModal(true);
        updateCurrentHabit(n, false);
        modalType("d3vis");
        m.redraw();
      });
    gButton
    .append("rect")
    .attr("style", (d) => d.parent ? "opacity: 0" : "opacity: 1")
    .attr("rx", nodeRadius / 2)
    .attr("x", 145)
    .attr("width", 80)
    .attr("height", 30)
    .on("click", (e) => {
      e.stopPropagation();
    });
    gButton
    .append("text")
    .attr("x", 155)
    .attr("y", 20)
    .text((d) => "PREPEND")
    .on("click", (e, n) => {
      openModal(true);
      updateCurrentHabit(n, false);
      modalType("d3vis-prepend");
      m.redraw();
      });
    };
      
    function activeNodeAnimation() {
      // https://stackoverflow.com/questions/45349849/concentric-emanating-circles-d3
      // Credit: Andrew Reid

      const gCircle = svg.selectAll("g.the-node.solid.active g:first-child");
      const pulseScale = scaleLinear()
        .range(["#211912", "#3349c1", "#5568d2"])
        .domain([0, 3 * nodeRadius]);
      const pulseData = [0, nodeRadius, nodeRadius * 2, nodeRadius * 3];
      const pulseCircles = gCircle
        .append("g")
        .classed("active-circle", true)
        .attr("stroke-opacity", (d) => {
          return activeNode && d.data.content === activeNode.data.content
            ? "1"
            : "0";
        })
        .selectAll("circle")
        .data(pulseData)
        .enter()
        .append("circle")
        .attr("r", function (d) {
          return d;
        })
        .attr("fill", "none")
        .style("stroke-width", "4")
        .style("stroke", function (d) {
          return pulseScale(d);
        });

      function transition() {
        let data = pulseData.map(function (d) {
          return d == 3 * nodeRadius ? 0 : d + nodeRadius;
        });

        var i = 0;
        // Grow circles
        pulseCircles
          .data(data)
          .filter(function (d) {
            return d > 0;
          })
          .transition()
          .ease(easeCircleOut)
          .attr("r", function (d) {
            return d;
          })
          .style("stroke", function (d) {
            return pulseScale(d);
          })
          .style("opacity", function (d) {
            return d == 3 * nodeRadius ? 0 : 1;
          })
          .duration(500);

        // Reset pulseCircles where r == 0
        pulseCircles
          .filter(function (d) {
            return d == 0;
          })
          .attr("r", 0)
          .style("opacity", 1)
          .style("stroke", function (d) {
            return pulseScale(d);
          });
      }
      showHabitLabel();
      transition();
    };
};;

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
  current === undefined || current === "false" || current == 'incomplete' ? "true" : "false";

const nodeStatusColours = (d) => {
  if (typeof d === "undefined" || typeof d.data.content === "undefined") return neutralCol;
  const status = parseTreeValues(d.data.content).status;
  if (status == "false" && TreeStore.root().leaves().includes(d)) return negativeCol;
  if (status === "") return noNodeCol;
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
  expandTree,
  zooms,
  debounce,
  positiveCol,
  neutralCol,
  negativeCol,
  noNodeCol,
  makePatchOrPutRequest
};
