Date.prototype.toDateInputValue = function () {
  const local = new Date(this);
  local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
  return local.toJSON().slice(0, 10);
};

const addActiveMenuStyles = function () {
  // Apply active state classes to card matching route
  const navButtons = document.querySelectorAll('button.menu-card-button');
  const currentPath = window.location.href.split('#!')[1];

  Array.from(navButtons).forEach((menuCardButton) => {
    const menuCard = menuCardButton.parentNode.parentNode;
    if (menuCardButton.getAttribute('href').endsWith(currentPath)) {
      menuCard.classList.add('active');
      menuCardButton.classList.add('active');
      menuCardButton.textContent = 'YOU ARE HERE';
    } else if (menuCard.classList.contains('active')) {
      menuCard.classList.toggle('active');
      menuCardButton.classList.toggle('active');
      menuCardButton.textContent = "LET'S GO";
    }
  });
};

const d3visPageMaker = function (layoutView, pageView) {
  const page = {
    view: () => m(layoutView, m(pageView)),
  };

  // Create a visualisation-containing div element with random ID
  const divId = `svg_container_${Math.floor(Math.random() * 1000000000)}${1}`;
  page.view = () => {
    // Pass uniqe selection id to the vis component for d3 selection
    const d3Canvas = m('div', { id: divId });

    return m(layoutView, m(pageView, { divId }, d3Canvas));
  };
  return page;
};

const d3SetupCanvas = function (document, margin) {
  const container = document.getElementById('vis');
  const { width, height } = container.getBoundingClientRect();

  const canvasWidth = width - margin.right - margin.left;
  const canvasHeight = height - margin.top - margin.bottom;

  return { canvasWidth, canvasHeight };
};

const debounce = function (func, delay) {
  let timeout;
  return (...args) => {
    if (timeout) { clearTimeout(timeout); }
    timeout = setTimeout(() => func.apply(null, args), delay);
  };
};

const redraw = () => {
  m.redraw();
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
  400: 'Bad Request: There may have been something wrong with your input.',
  404: 'Resource could not be found.',
  422: 'Unprocessable entity: There may have been something wrong with your input.',
  499: 'This is a demo app, and you can only add the 5 domains given to you. Please try another.',
};

const handleErrorType = function (err, type = 'warning') {
  if (err.response) {
    if (err.response.config.url === '/domains') {
      err.response.status = 499;
    }
  }
  switch (type) {
    case 'info':
      window.FlashMessage.info(messages[Number(err.response.status)]);
      break;
    case 'warning':
      window.FlashMessage.warning(messages[Number(err.response.status)]);
      break;
    default:
      window.FlashMessage.error(messages[Number(err.response.status)]);
      break;
  }
  throw err;
};
export {
  d3visPageMaker,
  d3SetupCanvas,
  debounce,
  handleAndRethrow,
  handleErrorType,
  addActiveMenuStyles,
  redraw,
};
