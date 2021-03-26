import HoverableLink from './HoverableLink.jsx';
import HabitStore from '../../../../store/habit-store';

const DropdownNav = (function () {
  HabitStore.index();
  return {
    view: ({ attrs: { routes } }) => (
      <nav className="nav">
        <div className="nav-container">
          <ul className="nav-links">
            {routes.map((route, index) => (
              <HoverableLink
                label={`${route.label}`}
                class={routes.selected === route.label ? 'active' : 'inactive'}
                id={`nav-${route.label.toLowerCase()}`}
                subpaths={`${route.subpaths}`}
              >
                {routes[index].subpaths}
              </HoverableLink>
            ))}
          </ul>
          {console.log(HabitStore.current())}
          <div className="top-12 left-8 bg-balance-lp absolute w-3/12 pl-12 mt-2">
            <span id="current-habit" className=" text-sm">
              Current Habit:
            </span>
            {m('span', HabitStore.current().name)}
          </div>
        </div>
      </nav>
    ),
  };
}());

export default DropdownNav;
