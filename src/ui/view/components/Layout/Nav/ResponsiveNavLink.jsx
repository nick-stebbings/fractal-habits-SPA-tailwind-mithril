const ResponsiveNavLink = {
  view: ({ attrs, children }) => (
    <li class="h-12 flex resp-nav-link">
      <a href={attrs.link}>{children}</a>
    </li>
  ),
};

export default ResponsiveNavLink;
