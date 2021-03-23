import HoverableLink from './HoverableLink.jsx';

const DropdownNav = (function () {
  return {
    view: ({ attrs: { routes } }) => (
      <nav className="nav">
        <div className="nav-container">
          <ul className="nav-links">
            {routes.map((route, index) => (
              <HoverableLink
                label={`${route.label}`}
                class={
                    routes.selected === route.label ? 'active' : 'inactive'
                  }
                id={`nav-${route.label.toLowerCase()}`}
                subpaths={`${route.subpaths}`}
              >
                {routes[index].subpaths}
              </HoverableLink>
            ))}
          </ul>
        </div>
      </nav>
    ),
  };
}());

export default DropdownNav;
