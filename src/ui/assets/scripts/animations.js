import Hammer from 'hammerjs';

const openSpinner = function (open = true) {
  const modalOverlay = document.querySelector('#modal_overlay');
  open
    ? modalOverlay.classList.remove('hidden')
    : modalOverlay.classList.add('hidden');
};

const openModal = function (open = true) {
  const modalOverlay = document.querySelector('#modal_overlay');
  const modal = modalOverlay.querySelector('#modal');
  const modalCl = modal.classList;
  if (open) {
    modalOverlay.classList.remove('hidden');
    setTimeout(() => {
      modalCl.remove('opacity-0');
      modalCl.remove('-translate-y-full');
      modalCl.remove('scale-150');
      modal.style['z-index'] = 101;
      document.documentElement.style.overflow = 'hidden';
    }, 100);
  } else {
    modalCl.add('-translate-y-full');
    setTimeout(() => {
      modalCl.add('opacity-0');
      modalCl.add('scale-150');
      modal.style['z-index'] = -101;
      document.documentElement.style.overflow = 'initial';
    }, 100);
    setTimeout(() => modalOverlay.classList.add('hidden'), 300);
  }
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
};

const addSwipeGestures = function () {
  const swipeBase = document.querySelector('#app');
  const manager = new Hammer.Manager(swipeBase);
  const Swipe = new Hammer.Swipe();
  const nextDate = document.getElementById('next-date-selector');
  const prevDate = document.getElementById('prev-date-selector');

  manager.add(Swipe);
  manager.on('swipe', (e) => {
    setInterval(() => {

    }, 50);
    if (Math.abs(e.deltaX) > 300) {
      const dispEvent = new Event('click');
      e.deltaX > 0
        ? prevDate.dispatchEvent(dispEvent)
        : nextDate.dispatchEvent(dispEvent);
    }
  });
};

const addIntersectionObserver = function () {
  const options = {
    threshold: 0.3,
    rootMargin: '0px 0px -100px 0px',
  };
  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const respNav = document.querySelector('#hamburger');
      respNav.checked = false;
      if (!entry.target.classList.contains('slide-center')) {
        entry.target.classList.add('slide-center');
      } else {
        entry.target.classList.remove('slide-center');
      }
      observer.unobserve(entry.target);
    });
  };
  const observer = new IntersectionObserver(callback, options);
  const observerForPageFooter = new IntersectionObserver((entries) => {
    const buttonGroup = document.querySelector('#create-new-habit-child .button-group');
    const habitInput = document.querySelector('.sub-section-container:last-of-type');
    if (!entries[0].isIntersecting) {
      buttonGroup && (buttonGroup.style.opacity = 1);
      habitInput && (habitInput.style.opacity = 1);
      return;
    }
    if (buttonGroup) {
      buttonGroup.style.opacity = (buttonGroup.style.opacity === 0 ? 1 : 0);
    }
    if (habitInput) {
      habitInput.style.opacity = (habitInput.style.opacity === 0 ? 1 : 0);
    }
  }, options);

  const infoCardsL = document.querySelectorAll('section.info-cards div.left-slider');
  const infoCardsR = document.querySelectorAll('section.info-cards div.right-slider');
  infoCardsL && infoCardsL.forEach((infoCard) => {
    observer.observe(infoCard);
  });
  infoCardsR && infoCardsR.forEach((infoCard) => {
    observer.observe(infoCard);
  });

  const pageFooter = document.querySelector('footer');
  observerForPageFooter && observerForPageFooter.observe(pageFooter);
};

const registerEventListeners = (function () {
  const { body } = document;
  document.addEventListener('DOMContentLoaded', () => {
    const hamburgerCheckbox = document.getElementById('hamburger');
    const respNavLabel = document.getElementById('hamburger-label');
    respNavLabel && respNavLabel.addEventListener('focus', (e) => {
      // Todo: add this and the logo as 'keyboard pressable' events for accessibility
      hamburgerCheckbox.checked = !hamburgerCheckbox.checked;
    });

    document.getElementById('modal_overlay') && document.getElementById('modal_overlay').addEventListener('click', (e) => {
      if (e.target.id.includes('close-modal')) {
        openModal(false);
      }
    });
    document.body.addEventListener('scroll', handleScroll);

    const removeBodyScrollClass = () => body.setAttribute('class', '');
    const scrollUp = 'scroll-up';
    const scrollDown = 'scroll-down';
    let lastScroll = 0;
    function handleScroll() {
      const currentScroll = body.scrollTop;
      if (currentScroll < 5) return removeBodyScrollClass();
      if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
        // down
        body.classList.remove(scrollUp);
        body.classList.add(scrollDown);
      } else if (
        currentScroll <= lastScroll
        && body.classList.contains(scrollDown)
      ) {
        // up
        body.classList.remove(scrollDown);
        body.classList.add(scrollUp);
      }
      lastScroll = currentScroll;
    }
  });
}());

export {
  registerEventListeners, openModal, openSpinner, addSwipeGestures, addIntersectionObserver,
};
