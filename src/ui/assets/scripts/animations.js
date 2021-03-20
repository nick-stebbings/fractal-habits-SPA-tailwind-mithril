const registerEventListeners = (function () {
  const body = document.body;
  window.addEventListener("DOMContentLoaded", () => {
    const scrollUp = "scroll-up";
    const scrollDown = "scroll-down";
    let lastScroll = 0;

    window.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll <= 0) {
        body.classList.remove(scrollUp);
        return;
      }

      if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
        // down
        body.classList.remove(scrollUp);
        body.classList.add(scrollDown);
      } else if (
        currentScroll < lastScroll &&
        body.classList.contains(scrollDown)
      ) {
        // up
        body.classList.remove(scrollDown);
        body.classList.add(scrollUp);
      }
      lastScroll = currentScroll;
    });
  });
})();

const openModal = function (value = true) {
  const modal_overlay = document.querySelector("#modal_overlay");
  const modal = document.querySelector("#modal");

  const modalCl = modal.classList;
  const overlayCl = modal_overlay;

  if (value) {
    overlayCl.classList.remove("hidden");
    setTimeout(() => {
      modalCl.remove("opacity-0");
      modalCl.remove("-translate-y-full");
      modalCl.remove("scale-150");
      modal.style['z-index'] = 101;
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
    setTimeout(() => overlayCl.classList.add("hidden"), 300);
  }
  document.documentElement.scrollTop = document.body.scrollTop = 0;
}

export { registerEventListeners, openModal }