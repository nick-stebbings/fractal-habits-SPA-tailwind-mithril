import HoverableLink from "./HoverableLink.jsx";

const DropdownNav = (function () {
  return {
    view: ({ attrs: { routes } }) => (
      <nav class="nav">
        <div class="nav-container">
          <ul class="nav-links">
            {routes.map((route, index) => {
              return (
                <HoverableLink
                  label={`${route.label}`}
                  class={
                    routes.selected === route.label ? "active" : "inactive"
                  }
                  id={`nav-${route.label.toLowerCase()}`}
                  subpaths={`${route.subpaths}`}
                >
                  {routes[index].subpaths}
                </HoverableLink>
              );
            })}
          </ul>
        </div>
      </nav>
    ),
  };
})();

export default DropdownNav;
