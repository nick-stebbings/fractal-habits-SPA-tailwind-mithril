import Hammer from "hammerjs";

const openSpinner = function (open = true) {
  const modalOverlay = document.querySelector("#modal_overlay");
  open
    ? modalOverlay.classList.remove("hidden")
    : modalOverlay.classList.add("hidden");
};

const openModal = function (open = true) {
  const modalOverlay = document.querySelector("#modal_overlay");
  const modal = modalOverlay.querySelector("#modal");
  const modalCl = modal.classList;
  if (open) {
    modalOverlay.classList.remove("hidden");
    setTimeout(() => {
      modalCl.remove("opacity-0");
      modalCl.remove("-translate-y-full");
      modalCl.remove("scale-150");
      modal.style["z-index"] = 101;
      document.documentElement.style.overflow = "hidden";
    }, 100);
  } else {
    modalCl.add("-translate-y-full");
    setTimeout(() => {
      modalCl.add("opacity-0");
      modalCl.add("scale-150");
      modal.style["z-index"] = -101;
      document.documentElement.style.overflow = "initial";
    }, 100);
    setTimeout(() => modalOverlay.classList.add("hidden"), 300);
  }
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
};

const addSwipeGestures = function () {
  const nextDate = document.getElementById("next-date-selector");
  const prevDate = document.getElementById("prev-date-selector");
  const swipeBase = document.querySelector("#app");
  const manager = new Hammer.Manager(swipeBase);
  const Swipe = new Hammer.Swipe();

  manager.add(Swipe);
  manager.on("swipe", function (e) {
    if (Math.abs(e.deltaX) > 300) {
      let dispEvent = new Event("click");
      e.deltaX > 0
        ? prevDate.dispatchEvent(dispEvent)
        : nextDate.dispatchEvent(dispEvent);
    }
  });
};

const registerEventListeners = (function () {
  const { body } = document;

  document.addEventListener("DOMContentLoaded", () => {
    const respNavLabel = document.getElementById('hamburger-label');
    const hamburgerCheckbox = document.getElementById('hamburger');
    respNavLabel.addEventListener('focus', (e) => {
      // Todo: add this and the logo as 'keyboard pressable' events
      hamburgerCheckbox.checked = !hamburgerCheckbox.checked;
    })

    document.getElementById("modal_overlay").addEventListener("click", (e) => {
      if (e.target.id.includes("close-modal")) {
        openModal(false);
      }
    });
    window.addEventListener("scroll", handleScroll);

    const removeBodyScrollClass = () => body.setAttribute("class", "");
    const scrollUp = "scroll-up";
    const scrollDown = "scroll-down";
    let lastScroll = 0;
    function handleScroll() {
      const currentScroll = window.pageYOffset;
      if (currentScroll < 5) return removeBodyScrollClass();
      if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
        // down
        body.classList.remove(scrollUp);
        body.classList.add(scrollDown);
      } else if (
        currentScroll <= lastScroll &&
        body.classList.contains(scrollDown)
      ) {
        // up
        body.classList.remove(scrollDown);
        body.classList.add(scrollUp);
      }
      lastScroll = currentScroll;
    }
  });
})();

export { registerEventListeners, openModal, openSpinner, addSwipeGestures };
