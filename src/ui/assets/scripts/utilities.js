Date.prototype.toDateInputValue = function () {
  const local = new Date(this);
  local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
  return local.toJSON().slice(0, 10);
};

const addActiveMenuStyles = function () {
  // Apply active state classes to card matching route
  const navButtons = document.querySelectorAll("button.menu-card-button");
  const currentPath = window.location.href.split("#!")[1];

  Array.from(navButtons).forEach((menuCardButton) => {
    const menuCard = menuCardButton.parentNode.parentNode;
    if (menuCardButton.getAttribute("href").endsWith(currentPath)) {
      menuCard.classList.add("active");
      menuCardButton.classList.add("active");
      menuCardButton.textContent = "YOU ARE HERE";
    } else if (menuCard.classList.contains("active")) {
      menuCard.classList.toggle("active");
      menuCardButton.classList.toggle("active");
      menuCardButton.textContent = "LET'S GO";
    }
  });
};

const redraw = () => {
  m.redraw();
};

const handleAndRethrow = function (err) {
  if (!err.response) {
    window.FlashMessage.error("Network Error: API is unavailable");
  } else {
    window.FlashMessage.info(`${err.response.status} code returned`);
  }
  throw err;
};

const messages = {
  400: "Bad Request: There may have been something wrong with your input.",
  404: "Resource could not be found.",
  422: "Unprocessable entity: There may have been something wrong with your input.",
  499: "This is a demo app, and you can only add the 5 domains given to you. Please choose from the the pill buttons (to the lower left)",
};

const handleErrorType = function (err, type = "warning") {
  if (err.response) {
    if (err.response.config.url === "/domains") {
      err.response.status = 499;
    }
  }
  const response =
    err.response?.status
      ? err.response.data.message || messages[Number(err.response.status)] // Allow server side validation message first
      : err;
  switch (type) {
    case "info":
      window.FlashMessage.info(response);
      break;
    case "warning":
      window.FlashMessage.warning(response);
      break;
    default:
      window.FlashMessage.error(response);
      break;
  }
  throw err;
};
export { handleAndRethrow, handleErrorType, addActiveMenuStyles, redraw };
