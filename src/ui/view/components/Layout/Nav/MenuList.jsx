import MenuListCard from './MenuListCard.jsx';
import { addActiveMenuStyles } from '../../../../assets/scripts/utilities';

const MenuList = {
  oncreate: addActiveMenuStyles,
  onupdate: addActiveMenuStyles,
  view: ({ children }) => Object.keys(children[0]).map((route, index) => (
    <MenuListCard
      id={`menu-list-card-${index}`}
      enabled={!!children[0][route].status}
      title={children[0][route].title}
      subtitle={children[0][route].description}
      url={`${route}`}
      icon={children[0][route].icon}
    />
  )),
};

export default MenuList;
