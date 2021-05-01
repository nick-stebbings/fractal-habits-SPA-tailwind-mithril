import HabitStore from "../../../../store/habit-store";

import HoverableLink from "./UI/Buttons/HoverableLink.jsx";

const DropdownNav = (function () {
  const showMegaMenu = () =>
    (document.querySelector(".mask-wrapper").style.height = "346px");
  const hideMegaMenu = () =>
    (document.querySelector(".mask-wrapper").style.height = "6.3rem");
  return {
    oncreate: () => {
      document
        .querySelector(".mega-menu")
        .addEventListener("mouseover", showMegaMenu);
      document
        .querySelector(".nav")
        .addEventListener("mouseover", showMegaMenu);
      document.querySelector(".nav").addEventListener("mouseout", hideMegaMenu);
      document
        .querySelector(".mega-menu")
        .addEventListener("mouseout", hideMegaMenu);
    },
    view: ({ attrs: { routes } }) => (
      <nav className="nav">
        <div className="nav-container">
          <ul className="nav-links">
            {m.route.param("demo") && <li id="demo-indicator">DEMO mode</li>}
            {routes.map((route, index) => (
              <HoverableLink
                label={route.label}
                href={Object.keys(route.subpaths)[0]}
                class={routes.selected === route.label ? "active" : "inactive"}
                id={`nav-${route.label.toLowerCase()}`}
                subpaths={route.subpaths}
              >
                {routes[index].subpaths}
              </HoverableLink>
            ))}
          </ul>
          <div class="hidden md:block" id="current-habit-label">
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
