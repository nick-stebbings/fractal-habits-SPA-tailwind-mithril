import stream from 'mithril/stream';
import { select, hierarchy, tree } from 'd3';
import { debounce, d3SetupCanvas, redraw } from '../../../../assets/scripts/utilities';

import TreeStore from '../../../../store/habit-tree-store.js';
import DomainStore from '../../../../store/domain-store.js';

import '../../../../assets/styles/components/d3vis.scss';

const HabitTree = (function () {
  let demoData = false;
  let canvasWidth; let
    canvasHeight;

  const debounceInterval = 150;
  const margin = {
    top: 150,
    right: 0,
    bottom: 50,
    left: 0,
  };

  const selectedDomain = stream(0);
  DomainStore.index().then(redraw);
  const root = stream({});

  function render(svg, canvasWidth, canvasHeight) {
    svg.selectAll('*').remove();
    const canvas = svg
      .append('g')
      .attr('transform', `translate(${margin.left + canvasWidth / 2},${margin.top})`);

    const handleEvents = function (selection) {
      selection
        .on('mouseover', function () {
          const g = select(this);
          const n = g.select('.the-node');

          g.select('.label')
            .transition()
            .duration(700)
            .style('opacity', '1');
        })
        .on('mouseout', function () {
          const g = select(this);
          const n = g.select('.the-node');

          g.select('.label')
            .transition()
            .duration(700)
            .style('opacity', '0');
        });
    };

    const scaleFactor = 2;
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
    const rootData = root();
    const treeLayout = tree()
      .size(canvasWidth, canvasHeight)
      .nodeSize([dy, dx]);

    treeLayout(rootData);

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

    // console.log(rootData, 'rootData after layout');
    // console.log(rootData.descendants(), 'rootData descendentst');

    const links = gLink.selectAll('line.link').data(rootData.links());
    const enteringLinks = links
      .enter()
      .append('line')
      .classed('link', true)
      .attr('x1', (d) => d.source.x)
      .attr('y1', (d) => d.source.y)
      .attr('x2', (d) => d.target.x)
      .attr('y2', (d) => d.target.y)
      .style('stroke', '#5f5f5f');

    const nodes = gNode.selectAll('g.node').data(rootData.descendants());
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
      .style('opacity', '0')
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
  }

  // TODO:  Figure out how to stop the second API call on the non-demo trees

  return {
    type: 'vis',
    oncreate: ({ attrs }) => {
      const svg = select(`div#${attrs.divId}`)
        .classed('h-full', true)
        .classed('w-full', true)
        .append('svg')
        .attr('width', '100%')
        .attr('height', '100%');
      ({ canvasWidth, canvasHeight } = d3SetupCanvas(document, margin));

      TreeStore.get(demoData, selectedDomain())
        .then((response) => hierarchy(response.data))
        .then(root)
        .then(() => {
          render(svg, canvasWidth, canvasHeight);
        });

      window.onresize = debounce(() => {
        ({ canvasWidth, canvasHeight } = d3SetupCanvas(document, margin));
        render(svg, canvasWidth, canvasHeight);
      }, debounceInterval);

      const domainSelector = document.getElementById('domain-selector');
      const demoButton = document.getElementById('activate-demo');

      demoButton.addEventListener('click', (e) => {
        demoData = !demoData;
        m.redraw();
      });

      domainSelector.addEventListener('change', (e) => {
        // Update Demo data domain reference
        selectedDomain(String(e.target.selectedIndex));
        DomainStore.current(DomainStore.list()[e.target.selectedIndex]);

        TreeStore.get(demoData, selectedDomain())
          .then((response) => hierarchy(response.data))
          .then(root)
          .then(() => {
            render(svg, canvasWidth, canvasHeight);
          })
          .then(redraw);
      });
      domainSelector.onfocus = (e) => { e.target.selectedIndex = -1; };
    },
    onupdate: () => {
      // # TODO
      const demoButton = document.getElementById('activate-demo');
      demoButton.setAttribute('class', demoData ? 'active' : 'inactive');
      console.log(demoButton);
    },
    view: (vnode) => (
      <div id="vis" className="w-full h-full mx-auto">
        <button type="button" id="activate-demo">
          Switch To Demo Data
        </button>
        {vnode.children}
      </div>
    ),
  };
}());

export default HabitTree;
