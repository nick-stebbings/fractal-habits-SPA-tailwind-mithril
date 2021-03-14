import MenuList from "./MenuList.jsx";

const HoverableLink = {
  view: ({ attrs, children }) => (
    <li class={`hoverable ${attrs.class}`}>
      <a id={`${attrs.id}`}>{attrs.label}</a>
      <div class="mega-menu">
        <div class="mega-menu-wrapper">
          <div class="inset-wrapper"></div>
          <div class="hero-message">
            <h2>View your Habits and Objectives</h2>
            <p>
              Take control of your behaviour with one of these views...
            </p>
          </div>
          <div class="inset">{<MenuList>{children}</MenuList>}</div>
        </div>
      </div>
    </li>
  ),
};

export default HoverableLink;
