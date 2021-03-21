import { select } from "d3-selection";

Date.prototype.toDateInputValue = function () {
  var local = new Date(this);
  local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
  return local.toJSON().slice(0, 10);
};

const d3visPageMaker = function (layoutView, pageView) {
  let page = {
    view: () => m(layoutView, m(pageView)),
  };

  // Create a visualisation-containing div element with random ID
  const divId = "svg_container_" + Math.floor(Math.random() * 1000000000) + 1;
  page.view = () => {
    // Pass a selector to the vis component, representing the div element where D3 can mutate the DOM
    const d3Canvas = m("div", { id: divId });
    return m(layoutView, m(pageView, d3Canvas));
  };
  page.oncreate = function () {
    // Pass an appended SVG selection to the vis component to consume
    pageView.content(
      select("div#" + divId)
        .classed("h-full", true)
        .append("svg")
        .attr("width", "100%")
        .attr("height", "100%")
    );
  };

  return page;
};

const debounce = function (func, delay) {
  let timeout;
  return (...args) => {
    if (timeout) { clearTimeout(timeout) }
    timeout = setTimeout(() => func.apply(null, args), delay);
  };
};

const handleAndRethrow = function (err) {
  if (!err.response) {
    console.log(err.stack);
    window.FlashMessage.error("Network Error: API is unavailable");
  } else {
    window.FlashMessage.info(`${err.response.status} code returned`);
  }
  throw err;
};

const handleErrorType = function (err, type = 'warning') {
  switch (type) {
    // TODO: Catrgorise by status code.
    case 'info':
      window.FlashMessage.info(err.response.body);
      break;
    case 'warning':
      window.FlashMessage.warning(err.response.body);
      break;
    default:
      window.FlashMessage.error(err.response.body);
      break;
  }
};
export { d3visPageMaker, debounce, handleAndRethrow, handleErrorType };
