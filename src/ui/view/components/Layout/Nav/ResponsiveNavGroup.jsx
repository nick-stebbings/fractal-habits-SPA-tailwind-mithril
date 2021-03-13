import ResponsiveNavLink from "./ResponsiveNavLink.jsx";

const ResponsiveNavGroup = {
  view: ({ attrs, children }) => (
    <li class="responsive-nav-group" id={attrs.id}>
      <a href={attrs.url}>{attrs.label}</a>
      <ul class="responsive-nav-link">
        {children.map((link) => (
          <ResponsiveNavLink>{link.title}</ResponsiveNavLink>
        ))}
      </ul>
    </li>
  ),
};

export default ResponsiveNavGroup;
