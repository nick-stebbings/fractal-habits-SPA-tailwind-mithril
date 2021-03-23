import MenuList from './MenuList.jsx';

const HoverableLink = {
  view: ({ attrs, children }) => (
    <li className={`hoverable ${attrs.class}`}>
      <a id={`${attrs.id}`}>{attrs.label}</a>
      <div className="mega-menu">
        <div className="mega-menu-wrapper">
          <div className="inset-wrapper" />
          <div className="hero-message">
            <h2>View your Habits and Objectives</h2>
            <p>
              Take control of your behaviour with one of these views...
            </p>
          </div>
          <div className="inset"><MenuList>{children}</MenuList></div>
        </div>
      </div>
    </li>
  ),
};

export default HoverableLink;
