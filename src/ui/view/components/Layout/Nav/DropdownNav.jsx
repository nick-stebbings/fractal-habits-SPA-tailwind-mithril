import HabitStore from '../../../../store/habit-store';

import HoverableLink from './UI/Buttons/HoverableLink.jsx';

const DropdownNav = (function () {
  const showMegaMenu = (e) => {
    // const wrapper = document.querySelector('.mask-wrapper');
    // if (wrapper.style.position === 'absolute') return;
    // document.querySelector('#app > main').style.position = 'absolute';
    document.querySelector('.mask-wrapper').style.height = '420px';
    // const navItem = e.target.closest('li').querySelector('.mega-menu');
    // if (navItem) (navItem.style.display = 'initial');
  };
  const hideMegaMenu = () => {
    // document.querySelector('#app > main').style.position = 'initial';
    document.querySelector('.mask-wrapper').style.height = '6rem';
    // document.querySelectorAll('.mask-wrapper .mega-menu').forEach((menu) => { menu.style.display = 'none'; });
  };
  return {
    oncreate: () => {
      document
        .querySelector('#hamburger-wrapper')
        .addEventListener('mouseenter', hideMegaMenu);
      document
        .querySelector('.mega-menu')
        .addEventListener('mouseenter', showMegaMenu);
      // [...document
      //   .querySelectorAll('.nav li.hoverable')].forEach((navItem) => {
      //   navItem.addEventListener('mouseenter', showMegaMenu, true);
      // });
      // [...document
      //   .querySelectorAll('.nav li.hoverable')].forEach((navItem) => {
      //   navItem.addEventListener('mouseleave', hideMegaMenu);
      // });
      document.querySelector('.nav').addEventListener('mouseleave', hideMegaMenu);
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
