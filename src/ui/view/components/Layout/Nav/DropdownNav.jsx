import HabitStore from '../../../../store/habit-store';

import HoverableLink from './UI/Buttons/HoverableLink.jsx';

const DropdownNav = (function () {
  const showMegaMenu = (id) => {
    document.querySelector('.mask-wrapper').style.height = '357px';
    [...document.querySelectorAll('.mega-menu')].forEach((menu, idx) => {
      if (id === idx) {
        menu.style.display = 'block';
      } else {
        menu.style.display = 'none';
      }
    });
    document.querySelector('.mask-wrapper').style.zIndex = '40';
  };
  const hideMegaMenu = () => {
    document.querySelector('.mask-wrapper').style.height = '5rem';
    [...document.querySelectorAll('.mega-menu')].forEach((menu) => {
      menu.style.display = 'none';
    });
    document.querySelector('.mask-wrapper').style.zIndex = '10';
  };
  return {
    oncreate: () => {
      [...document
        .querySelectorAll('.nav li.hoverable')].forEach((navItem) => {
        navItem.addEventListener('click', (e) => {
          const { id } = e.target;
          if (document.body.classList.contains('scroll-down') || document.body.classList.contains('scroll-up')) {
            // Allow finding the top of the page again using active nav list item
            document.body.scroll(0, 0);
          }
          const idx = ['nav-visualise', 'nav-habits'].indexOf(id);
          const menuVisible = (document.querySelector(
            '.mask-wrapper',
          ).style.height === '5rem');
          menuVisible ? showMegaMenu(idx) : hideMegaMenu();
        });
      });
      document.querySelector('.date-card-wrapper').addEventListener('mouseenter', showMegaMenu);
      document.querySelector('.nav-container').addEventListener('click', (e) => {
        if (!(e.target.classList.contains('nav-container'))) return;
        showMegaMenu();
      });
      document.querySelector('.date-card-wrapper').addEventListener('mouseleave', hideMegaMenu);
      document.querySelector('nav.nav').addEventListener('mouseenter', hideMegaMenu);
    },
    view: ({ attrs: { routes } }) => (
      <nav className="nav">
        <div className="nav-container">
          <ul className="nav-links">
            {m.route.param('demo') && <li id="demo-indicator">DEMO mode</li>}
            {routes.map((route, index) => (
              <HoverableLink
                label={route.label}
                href={Object.keys(route.subpaths)[0]}
                class={routes.selected === route.label ? 'active' : 'inactive'}
                id={`nav-${route.label.toLowerCase()}`}
                subpaths={route.subpaths}
              >
                {routes[index].subpaths}
              </HoverableLink>
            ))}
          </ul>
          <div className="md:block hidden" id="current-habit-label">
            <span id="current-habit">Habit:</span>
            {m(
              'span',
              HabitStore.current()
                ? HabitStore.current().name
                : 'No Habits Registered',
            )}
          </div>
        </div>
      </nav>
    ),
  };
}());

export default DropdownNav;
