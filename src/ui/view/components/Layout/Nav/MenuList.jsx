import MenuListCard from './MenuListCard.jsx';

const MenuList = {
  oncreate: () => {
    // Apply active state classes to card matching route
    const navButtons = document.querySelectorAll('button.menu-card-button');
    const currentPath = window.location.href.split('#!')[1];

    Array.from(navButtons).forEach((menuCardButton) => {
      const menuCard = menuCardButton.parentNode.parentNode;
      if (menuCardButton.getAttribute('href').endsWith(currentPath)) {
        menuCard.classList.add('active');
        menuCardButton.classList.add('active');
        menuCardButton.textContent = 'YOU ARE HERE';
      }
    });
  },
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
