const ResponsiveNavLink = {
  view: ({ attrs: { url, details } }) => (
    <li class="h-12 flex resp-nav-link">
      {m(m.route.Link, { href: url }, details.title)}
    </li>
  ),
};

export default ResponsiveNavLink;
