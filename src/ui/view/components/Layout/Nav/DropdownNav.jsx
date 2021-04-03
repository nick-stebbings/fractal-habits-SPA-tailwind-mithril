import HoverableLink from "./HoverableLink.jsx";
import HabitStore from "../../../../store/habit-store";

const DropdownNav = (function () {
  return {
    view: ({ attrs: { routes } }) => (
      <nav className="nav">
        <div className="nav-container">
          <ul className="nav-links">
            {m.route.param("demo") && (
              <li id="demo-indicator">
                In DEMO mode
                <br />
                (Read Only)
              </li>
            )}
            {routes.map((route, index) => (
              <HoverableLink
                label={`${route.label}`}
                class={routes.selected === route.label ? "active" : "inactive"}
                id={`nav-${route.label.toLowerCase()}`}
                subpaths={`${route.subpaths}`}
              >
                {routes[index].subpaths}
              </HoverableLink>
            ))}
          </ul>
          <div>
            <span id="current-habit">Selected:</span>
            {m(
              "span",
              HabitStore.current()
                ? HabitStore.current().name
                : "No Habits Registered"
            )}
          </div>
        </div>
      </nav>
    ),
  };
})();

export default DropdownNav;
