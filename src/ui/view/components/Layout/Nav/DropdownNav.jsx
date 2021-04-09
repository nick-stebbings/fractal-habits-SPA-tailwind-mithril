import HabitStore from "../../../../store/habit-store";

import HoverableLink from "./UI/Buttons/HoverableLink.jsx";

const DropdownNav = (function () {
  return {
    view: ({ attrs: { routes } }) => (
      <nav className="nav">
        <div className="nav-container">
          <ul className="nav-links">
            {m.route.param("demo") && <li id="demo-indicator">DEMO mode</li>}
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
