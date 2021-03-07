import Routes from "../../../../menu-routes";

import HoverableLink from "./HoverableLink.jsx";

const DropdownNav = (function () {
  let routes = Routes;
  return {
    view: () => (
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
                  hrefs={`${route.hrefs}`}
                >
                  {routes[index].hrefs}
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
