import { select } from 'd3-selection';

Date.prototype.toDateInputValue = function () {
  const local = new Date(this);
  local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
  return local.toJSON().slice(0, 10);
};

const d3visPageMaker = function (layoutView, pageView) {
  const page = {
    view: () => m(layoutView, m(pageView)),
  };

  // Create a visualisation-containing div element with random ID
  const divId = `svg_container_${Math.floor(Math.random() * 1000000000)}${1}`;
  page.view = () => {
    // Pass selector to the vis component, representing the div element where D3 can mutate the DOM
    const d3Canvas = m('div', { id: divId });
    return m(layoutView, m(pageView, d3Canvas));
  };
  page.oncreate = function () {
    // Pass an appended SVG selection to the vis component to consume
    pageView.content(
      select(`div#${divId}`)
        .classed('h-full', true)
        .append('svg')
        .attr('width', '100%')
        .attr('height', '100%'),
    );
  };

  return page;
};

const debounce = function (func, delay) {
  let timeout;
  return (...args) => {
    if (timeout) { clearTimeout(timeout); }
    timeout = setTimeout(() => func.apply(null, args), delay);
  };
};

const handleAndRethrow = function (err) {
  if (!err.response) {
    window.FlashMessage.error('Network Error: API is unavailable');
  } else {
    window.FlashMessage.info(`${err.response.status} code returned`);
  }
  throw err;
};

const messages = {
  400: 'Bad Request.',
  404: 'Resource could not be found.',
  422: 'Unprocessable entity.',
};

const handleErrorType = function (err, type = 'warning') {
  switch (type) {
    case 'info':
      window.FlashMessage.info(messages[Number(err.response)]);
      break;
    case 'warning':
      window.FlashMessage.warning(messages[Number(err.response)]);
      break;
    default:
      window.FlashMessage.error(messages[Number(err.response)]);
      break;
  }
  throw err;
};
export {
  d3visPageMaker, debounce, handleAndRethrow, handleErrorType,
};
