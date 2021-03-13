import TreeStore from "../../../../store/habit-tree-store.js";

// import "./tree-style.scss";
import * as d3 from "d3";

const svgWidth = 960;
const svgHeight = 1000;

const HabitTree = {
  type: "vis",
  view: ({ children }) => (
    <div id="vis" class="h-full mx-auto w-3/4">
      {children}
    </div>
  ),
  content(svg) {
    let margin = { top: 40, right: 200, bottom: 20, left: 200 },
      width = svgWidth - margin.right - margin.left,
      height = svgHeight - margin.top - margin.bottom;

    let canvas = svg
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var handleEvents = function (selection) {
      selection
        .on("mouseover", function () {
          let g = d3.select(this);
          let n = g.select(".the-node");

          if (n.classed("solid")) {
            n.transition()
              .duration(400)
              .style("fill", "rgba(211,0,0,0.8)")
              .attr("r", 18);
          } else {
            n.transition().duration(400).style("fill", "rgba(211,0,0,0.8)");
          }

          g.select(".label").transition().duration(700).style("fill", "white");
        })
        .on("mouseout", function () {
          let g = d3.select(this);
          let n = g.select(".the-node");

          if (n.classed("solid")) {
            n.transition().duration(400).style("fill", "#696969").attr("r", 14);
          } else {
            n.transition().duration(400).style("fill", "rgba(255,255,255,0.2)");
          }
          g.select(".label").transition().duration(700).style("fill", "black");
        });
    };

    let fetchTreeData = TreeStore.get(1);
    fetchTreeData.then(function (response) {
      const root = d3.hierarchy(response.data);
      console.log(root);
      const dy = width / 6;
      const dx = height / 6;
      // console.log(root, 'root at first');
      // root.y0 = dy / 2;
      // root.x0 = 0;
      // root.descendants().forEach((d, i) => {
      //   d.id = i;
      //   d._children = d.children;
      //   if (d.depth && d.data.name.length !== 7) d.children = null;
      // });

      const treeLayout = d3.tree().size(width, height).nodeSize([dy, dx]);

      treeLayout(root);

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

      // console.log(root, 'root after layout');
      // console.log(root.descendants(), 'root descendentst');

      const links = gLink.selectAll("line.link").data(root.links());
      const enteringLinks = links
        .enter()
        .append("line")
        .classed("link", true)
        .attr("x1", (d) => d.source.x)
        .attr("y1", (d) => d.source.y)
        .attr("x2", (d) => d.target.x)
        .attr("y2", (d) => d.target.y)
        .style("stroke", "#5f5f5f");

      const nodes = gNode.selectAll("g.node").data(root.descendants());
      const enteringNodes = nodes
        .enter()
        .append("g")
        .classed("the-node solid", true)
        .style("fill", "#696969")
        .attr("transform", function (d) {
          return "translate(" + d.x + "," + d.y + ")";
        })
        .call(handleEvents);
      enteringNodes
        .append("text")
        .attr("class", "label")
        .attr("dx", 15)
        .attr("dy", 5)
        .text((d) => d.data.name);
      enteringNodes.append("circle").attr("r", 6);

      //     var link = gLink.selectAll("path.link")
      //                 .data(links, function (d) {
      //                 return d.target.id;
      //             });
      //     var linkGen = d3.linkVertical()
      //       .x(function(d) {
      //         return d.y;
      //       })
      //       .y(function(d) {
      //         return d.x;
      //       });
      // link.enter().insert("path", "g")
      //         .attr("class", "link")
      //         .attr("x", dx / 2)
      //         .attr("y", dy / 2)
      //         .attr("d", linkGen);
      //     });
    });
  },
};

export default HabitTree;
