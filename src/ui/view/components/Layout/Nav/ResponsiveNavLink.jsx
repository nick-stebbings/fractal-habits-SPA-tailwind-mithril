const ResponsiveNavLink = {
  view: ({ attrs: { url, details } }) => (
    <li
      class="resp-nav-link hover:underline flex px-4 mt-4 w-full"
      style="flex-basis: 100%"
    >
      {m(m.route.Link, { href: url }, details.title)}
    </li>
  ),
};

export default ResponsiveNavLink;
