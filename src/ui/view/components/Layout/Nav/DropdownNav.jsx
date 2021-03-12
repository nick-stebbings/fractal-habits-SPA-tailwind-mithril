import MenuRoutes from "../../../../menu-routes";

import HoverableLink from "./HoverableLink.jsx";

const DropdownNav = (function () {
  return {
    view: () => (
      <nav class="nav">
        <div class="nav-container">
          <ul class="nav-links">
            {MenuRoutes.map((route, index) => {
              return (
                <HoverableLink
                  label={`${route.label}`}
                  class={
                    MenuRoutes.selected === route.label ? "active" : "inactive"
                  }
                  id={`nav-${route.label.toLowerCase()}`}
                  hrefs={`${route.hrefs}`}
                >
                  {MenuRoutes[index].hrefs}
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
