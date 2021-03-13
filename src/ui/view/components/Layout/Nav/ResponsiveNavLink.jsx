const ResponsiveNavLink = {
  view: ({ attrs: { url, details } }) => (
    <li class="flex px-4 mt-4 w-full resp-nav-link" style="flex-basis: 100%">
      {m(m.route.Link, { href: url }, details.title)}
    </li>
  ),
};

export default ResponsiveNavLink;
