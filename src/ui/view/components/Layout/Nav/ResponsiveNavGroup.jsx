import ResponsiveNavLink from "./ResponsiveNavLink.jsx";

const ResponsiveNavGroup = {
  view: ({ attrs, children }) => (
    <li class="flex h-12 responsive-nav-group" id={attrs.id}>
      <a href={attrs.url}>{attrs.label}</a>
      <ul class="flex flex-col h-12 responsive-nav-link">
        {children.map((link) => (
          <ResponsiveNavLink>{link.title}</ResponsiveNavLink>
        ))}
      </ul>
    </li>
  ),
};

export default ResponsiveNavGroup;
