import HoverableLink from './HoverableLink.jsx';
import DomainStore from '../../../../store/domain-store';
import HabitStore from '../../../../store/habit-store';

const DropdownNav = (function () {
  // TODO change this from hard-coded. Extract to a parent component for multiuse?
  // DomainStore.indexHabitsOf(9).then(() => {
  //   console.log(HabitStore.list());
  //   console.log(HabitStore.current());
  // });
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
          <div>
            <span id="current-habit">
              Selected:
            </span>
            {m('span', HabitStore.current() ? HabitStore.current().name : 'No Habits Registered')}
          </div>
        </div>
      </nav>
    ),
  };
}());

export default DropdownNav;
