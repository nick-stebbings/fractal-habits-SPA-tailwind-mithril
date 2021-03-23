const ResponsiveNavLink = {
  view: ({ attrs: { url, details, enabled } }) => (
    <li
      className="resp-nav-link hover:underline flex w-full px-4 mt-4"
      style={`${!enabled ? 'color: gray; ' : ''}flex-basis: 100%`}
    >
      {enabled ? m(m.route.Link, { href: url }, details.title) : details.title}
    </li>
  ),
};

export default ResponsiveNavLink;
