const MenuListCard = {
  oncreate: ({ attrs, dom }) => {
    if (attrs.enabled) {
      dom.classList.add("enabled");
      dom.classList.toggle("disabled");
    }
  },
  view: ({ attrs }) => (
    <div className="menu-card disabled rounded-2xl text-black flex flex-col justify-between h-full bg-gray-100 shadow-xl">
      <div className="overlay flex items-center justify-center">
        <h3>Under Construction</h3>
      </div>
      <div className="flex items-center justify-center mt-6">
        <h3 className="flex px-2">{attrs.title}</h3>
        <div className="text-balance-pshades-dark w-18 h-18 flex items-center justify-center">
          {m.trust(attrs.icon)}
        </div>
      </div>
      <div className="flex flex-col items-center" style="flex-basis: 50%">
        {m(
          m.route.Link,
          {
            selector: "button",
            href: m.route.param("demo") ? attrs.url + "?demo=true" : attrs.url,
            class: "menu-card-button",
          },
          "Let's Go"
        )}
        <p className="text-tershades-gray">{attrs.subtitle}</p>
      </div>
    </div>
  ),
};

export default MenuListCard;
