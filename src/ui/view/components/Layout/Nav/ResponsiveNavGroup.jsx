import ResponsiveNavLink from "./ResponsiveNavLink.jsx";

const ResponsiveNavGroup = {
  view: ({ attrs, children: [subpaths] }) => (
    <li class="responsive-nav-group flex h-12" id={attrs.id}>
      {m(
        m.route.Link,
        { href: attrs.url, id: attrs.id, class: attrs.class },
        attrs.label
      )}
      <ul class="flex flex-col responsive-nav-link">
        {Object.keys(subpaths).map((path) => (
          <ResponsiveNavLink url={path} details={subpaths[path]} />
        ))}
      </ul>
    </li>
  ),
};

export default ResponsiveNavGroup;
