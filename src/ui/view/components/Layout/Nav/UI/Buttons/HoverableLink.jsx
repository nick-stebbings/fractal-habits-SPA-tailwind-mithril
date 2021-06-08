import CalendarWidget from '../../CalendarWidget.jsx';
import MenuList from '../../MenuList.jsx';

const HoverableLink = {
  view: ({ attrs }) => (
    <li className={`hoverable ${attrs.class}`}>
      <span id={attrs.id}>{attrs.label}</span>
      <div className="mega-menu">
        <div className={m.route.param('demo') ? 'mega-menu-wrapper bg-gray-600' : 'mega-menu-wrapper bg-balance-pshades-dark'}>
          <div className="inset-wrapper" />
          <div className="hero-message">
            <h2>View your Habits</h2>
            <p>
              Track and visualise using these views:
            </p>
          </div>
          <div className="inset">
            <CalendarWidget />
            {/* <MenuList>{children}</MenuList> */}
          </div>
        </div>
      </div>
    </li>
  ),
};

export default HoverableLink;
