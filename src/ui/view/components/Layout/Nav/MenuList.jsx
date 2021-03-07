import MenuListCard from "./MenuListCard.jsx";

const MenuList = {
  view: ({ children }) =>
    Object.keys(children[0]).map((route, index) => (
      <MenuListCard
        title={children[0][route].title}
        id={index}
        subtitle={children[0][route].description}
        url={`#!/${route}`}
        icon={children[0][route].icon}
      />
    )),
};

export default MenuList;
