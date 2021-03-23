import * as d3 from 'd3';
import { debounce } from '../../../../assets/scripts/utilities';
import TreeStore from '../../../../store/habit-tree-store.js';

// import "./tree-style.scss";

const HabitTree = {
  type: 'vis',
  oncreate: () => {
    window.onresize = debounce(() => {
      m.redraw();
    }, 50);
  },
  view: (vnode) => (
    <div id="vis" className="w-3/4 h-full mx-auto">
      {vnode.children}
    </div>
  ),
  content(svg) {
    const container = document.getElementById('vis');
    const { width, height } = container.getBoundingClientRect();

    const margin = {
      top: 50, right: 0, bottom: 50, left: 0,
    };
    const canvasWidth = width - margin.right - margin.left;
    const canvasHeight = height - margin.top - margin.bottom;

    const canvas = svg
      .append('g')
      .attr(
        'transform',
        `translate(${margin.left + width / 2},${margin.top})`,
      );

    const handleEvents = function (selection) {
      selection
        .on('mouseover', function () {
          const g = d3.select(this);
          const n = g.select('.the-node');

          g.select('.label').transition().duration(700).style('fill', 'white');
        })
        .on('mouseout', function () {
          const g = d3.select(this);
          const n = g.select('.the-node');

          g.select('.label').transition().duration(700).style('fill', 'black');
        });
    };

    const fetchTreeData = TreeStore.get();
    fetchTreeData.then((response) => {
      const root = d3.hierarchy(response.data);
      const scaleFactor = 2;
      console.log(root);
      const dy = (canvasWidth / 10) * scaleFactor;
      const dx = (canvasHeight / 15) * scaleFactor;
      // console.log(root, 'root at first');
      // root.y0 = dy / 2;
      // root.x0 = 0;
      // root.descendants().forEach((d, i) => {
      //   d.id = i;
      //   d._children = d.children;
      //   if (d.depth && d.data.name.length !== 7) d.children = null;
      // });

      const treeLayout = d3
        .tree()
        .size(canvasWidth, canvasHeight)
        .nodeSize([dy, dx]);

      treeLayout(root);
      console.log(response);

      const gLink = canvas
        .append('g')
        .classed('links', true)
        .attr('fill', 'none')
        .attr('stroke', '#555')
        .attr('stroke-opacity', 0.4)
        .attr('stroke-width', 1.5);
      const gNode = canvas
        .append('g')
        .classed('nodes', true)
        .attr('cursor', 'pointer')
        .attr('pointer-events', 'all');

      // console.log(root, 'root after layout');
      // console.log(root.descendants(), 'root descendentst');

      const links = gLink.selectAll('line.link').data(root.links());
      const enteringLinks = links
        .enter()
        .append('line')
        .classed('link', true)
        .attr('x1', (d) => d.source.x)
        .attr('y1', (d) => d.source.y)
        .attr('x2', (d) => d.target.x)
        .attr('y2', (d) => d.target.y)
        .style('stroke', '#5f5f5f');

      const nodes = gNode.selectAll('g.node').data(root.descendants());
      const enteringNodes = nodes
        .enter()
        .append('g')
        .classed('the-node solid', true)
        .style('fill', '#696969')
        .attr('transform', (d) => `translate(${d.x},${d.y})`)
        .call(handleEvents);
      enteringNodes
        .append('text')
        .attr('class', 'label')
        .attr('dx', 15)
        .attr('dy', 5)
        .text((d) => d.data.name);
      enteringNodes.append('circle').attr('r', 6 * scaleFactor);

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
