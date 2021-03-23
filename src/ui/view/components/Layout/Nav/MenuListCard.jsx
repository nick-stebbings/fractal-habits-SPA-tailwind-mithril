const MenuListCard = {
  oncreate: ({ attrs, dom }) => {
    if (attrs.enabled) {
      dom.classList.add('enabled');
      dom.classList.toggle('disabled');
    }
    console.log('dom :>> ', dom);
  },
  view: ({ attrs }) => (
    <div className="menu-card disabled rounded-2xl text-balance-black flex flex-col justify-between h-full bg-gray-100 shadow-xl">
      <div className="overlay flex items-center justify-center">
        <h3>Under Construction</h3>
      </div>
      <div className="flex items-center justify-center">
        <h3 className="flex pl-2 mt-6 mb-auto">{attrs.title}</h3>
        <div className="text-balance-dp flex items-center justify-center w-24 h-24">
          {m.trust(attrs.icon)}
        </div>
      </div>
      <div className="flex flex-col items-center" style="flex-basis: 50%">
        {m(
          m.route.Link,
          {
            selector: 'button',
            href: attrs.url,
            class: 'menu-card-button',
          },
          "Let's Go",
        )}
        <p className="text-lg">{attrs.subtitle}</p>
      </div>
    </div>
  ),
};

export default MenuListCard;
