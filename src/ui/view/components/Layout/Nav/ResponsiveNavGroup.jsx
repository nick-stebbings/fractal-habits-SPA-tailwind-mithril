import ResponsiveNavLink from './UI/Buttons/ResponsiveNavLink.jsx';

const ResponsiveNavGroup = {
  oncreate: ({ dom }) => {
    dom.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') {
        // Collapse responsive menu when you click active link
        document.getElementById('hamburger').checked = false;
      }
    });
  },
  view: ({ attrs, children: [subpaths] }) => (
    <li
      className="responsive-nav-group flex flex-wrap w-3/4 py-4 mx-auto mt-2"
      id={attrs.id}
    >
      {m(
        'h2',
        {
          id: attrs.id,
          class: attrs.class,
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
