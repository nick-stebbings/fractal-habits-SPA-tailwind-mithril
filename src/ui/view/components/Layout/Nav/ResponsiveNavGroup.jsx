import ResponsiveNavLink from './ResponsiveNavLink.jsx';

const ResponsiveNavGroup = {
  oncreate: ({dom}) => {
    dom.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') {
        // Collapse responsive menu when you click active link
        document.getElementById('hamburger').checked = false;
      }
    });
  },
  view: ({ attrs, children: [subpaths] }) => (
    <li
      className="responsive-nav-group active:outline-light hover:outline-light flex flex-wrap w-3/4 py-4 mx-auto mt-2 border-t-2"
      id={attrs.id}
    >
      {m(
        m.route.Link,
        {
          id: attrs.id,
          class: attrs.class,
          href: attrs.url,
          style: 'flex-basis: 100%',
        },
        attrs.label,
      )}
      <ul className="responsive-nav-link flex flex-wrap justify-around h-full">
        {Object.keys(subpaths).map((path) => (
          <ResponsiveNavLink
            url={path}
            enabled={!!subpaths[path].status}
            details={subpaths[path]}
          />
        ))}
      </ul>
    </li>
  ),
};

export default ResponsiveNavGroup;
