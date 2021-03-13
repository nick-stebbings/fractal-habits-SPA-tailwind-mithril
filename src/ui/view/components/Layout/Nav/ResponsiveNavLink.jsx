const ResponsiveNavLink = {
  view: ({ attrs, children }) => (
    <li class="resp-nav-link">
      <a href={attrs.link}>{children}</a>
    </li>
  ),
};

export default ResponsiveNavLink;
