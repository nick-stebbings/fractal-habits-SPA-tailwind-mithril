const MenuListCard = {
  oncreate: () => {
    const navButtons = document.querySelectorAll("button.menu-card-button");
      Array.from(navButtons).forEach(
        (menuCard) => {
          const currentPath = window.location.href.split("/#!")[1];
          if (menuCard.getAttribute("href").includes(currentPath)) {
            menuCard.parentNode.parentNode.classList.add('active');
            menuCard.classList.add('active');
            menuCard.textContent = 'YOU ARE HERE';
          }
        }
      );
  },
  view: ({ attrs }) => (
    <div
      class="menu-card h-full bg-gray-100 rounded-2xl shadow-xl text-balance-black"
    >
      <div class="h-1/3 flex justify-around space-x-6 px-6">
        <h3 class="flex mb-auto mt-4">{attrs.title}</h3>
        <div class="flex flex-none h-24 w-24 text-balance-dp">{m.trust(attrs.icon)}</div>
      </div>
      <div class="flex flex-col items-center" style="flex-basis: 33%">
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
