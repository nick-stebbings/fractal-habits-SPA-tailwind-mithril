const MenuListCard = {
  oncreate: () => {
    // Apply active state classes to card matching route
    const navButtons = document.querySelectorAll("button.menu-card-button");
      Array.from(navButtons).forEach(
        (menuCard) => {
          const currentPath = window.location.href.split("/#!")[1];
          if (menuCard.getAttribute("href").endsWith(currentPath)) {
            menuCard.parentNode.parentNode.classList.add('active');
            menuCard.classList.add('active');
            menuCard.textContent = 'YOU ARE HERE';
          }
        }
      );
  },
  view: ({ attrs }) => (
    <div
      class="menu-card h-full bg-gray-100 rounded-2xl shadow-xl text-balance-black flex flex-col justify-between"
    >
      <div class="flex px-2">
        <h3 class="flex mb-auto mt-4">{attrs.title}</h3>
        <div class="flex items-center justify-center h-24 w-24 text-balance-dp">{m.trust(attrs.icon)}</div>
      </div>
      <div class="flex flex-col items-center" style="flex-basis: 50%">
        {m(
          m.route.Link,
          {
            selector: "button",
            href: attrs.url,
            class: "menu-card-button",
          },
          "Let's Go"
          )}
          <p class="text-lg">{attrs.subtitle}</p>
      </div>
    </div>
  ),
};

export default MenuListCard;
