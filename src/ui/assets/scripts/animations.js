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

const registerEventListeners = (function () {
  const { body } = document;
  window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("modal_overlay").addEventListener("click", (e) => {
      if (e.target.id.match("close-modal")) {
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

export { registerEventListeners, openModal, openSpinner };
