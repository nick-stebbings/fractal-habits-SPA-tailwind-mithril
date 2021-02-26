import MenuListCard from "./MenuListCard.jsx";

const MenuList = {
  view: ({ children }) => (
    <div class="mega-menu-container container">
      {
        // Map Subnav routes to their menu cards
        Object.keys(children[0]).map((route, index) => (
          <MenuListCard
            title={children[0][route].title}
            id={index}
            subtitle={children[0][route].description}
            url={`#!/${route}`}
            icon={children[0][route].icon}
          />
        ))
      }
    </div>
  ),
};

export default MenuList;
