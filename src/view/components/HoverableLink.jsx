import MenuList from "./MenuList.jsx";

const HoverableLink = {
  view: ({ attrs, children }) => (
    <li class={`hoverable ${attrs.class}`}>
      <a id={`${attrs.id}`}>{attrs.label}</a>
      <div class="mega-menu">
        <div class="mega-menu-wrapper">
          <div class="hero-message">
            <h2>Main Hero Message for the menu section</h2>
            <p>
              Sub-hero message, not too long and not too short. Make it just
              right!
            </p>
          </div>
          <div class="inset">{<MenuList>{children}</MenuList>}</div>
        </div>
      </div>
    </li>
  ),
};

export default HoverableLink;
