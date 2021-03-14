import ResponsiveNavLink from "./ResponsiveNavLink.jsx";

const ResponsiveNavGroup = {
  view: ({ attrs, children: [subpaths] }) => (
    <li
      class="responsive-nav-group flex mt-2 w-3/4 mx-auto flex-wrap py-4 border-t-2"
      id={attrs.id}
    >
      {m(
        m.route.Link,
        {
          href: attrs.url,
          id: attrs.id,
          class: attrs.class,
          style: "flex-basis: 100%",
        },
        attrs.label
      )}
      <ul class="flex flex-wrap justify-around h-full responsive-nav-link ">
        {Object.keys(subpaths).map((path) => (
          <ResponsiveNavLink url={path} details={subpaths[path]} />
        ))}
      </ul>
    </li>
  ),
};

export default ResponsiveNavGroup;
