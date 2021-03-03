import HoverableLink from "./HoverableLink.jsx";

import "../../css/components/partials/dropdown-nav.scss";

const DropdownNav = {
  view: (vnode) => (
    <nav class="nav">
      <div class="nav-container">
        <ul class="nav-links">
          {vnode.attrs.routes.map((route, index) => {
            return (
              <HoverableLink
                label={`${route.label}`}
                class={
                  vnode.attrs.routes.selected === route.label
                    ? "active"
                    : "inactive"
                }
                id={`nav-${route.label.toLowerCase()}`}
                hrefs={`${route.hrefs}`}
              >
                {vnode.attrs.routes[index].hrefs}
              </HoverableLink>
            );
          })}
        </ul>
      </div>
    </nav>
  ),
};

export default DropdownNav;
