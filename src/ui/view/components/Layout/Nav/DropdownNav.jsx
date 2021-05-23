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
    document.querySelector('.mask-wrapper').style.zIndex = "40";
  };
  const hideMegaMenu = () => {
    document.querySelector('.mask-wrapper').style.height = '6.3rem';
    [...document.querySelectorAll('.mega-menu')].forEach(menu => {
      menu.style.display = 'none';
    });
    document.querySelector('.mask-wrapper').style.zIndex = "10";
  };
  return {
    oncreate: () => {
      [...document
        .querySelectorAll('.nav li.hoverable')].forEach((navItem) => {
          navItem.addEventListener("click", (e) => {
          let id = e.target.id;
            let idx = ["nav-visualise", "nav-habits"].indexOf(id);
            let menuVisible = (document.querySelector(
              ".mask-wrapper"
            ).style.height === "6.3rem");
          menuVisible ? showMegaMenu(idc) : hideMegaMenu();
        });
      });
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
            <span id="current-habit">Selected:</span>
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
