const MenuListCard = {
  view: ({ attrs }) => (
    <div>
      <div class="text-balance-black bg-gray-200 rounded-2xl px-6 py-3">
        <h3 class="text-center font-bold text-xl text-balance-black text-bold my-2">
          {attrs.title}
        </h3>
        <span class="flex justify-end py-3 text-balance-black">
          {/* <Icon id={attrs.icon} string={mountain} /> */}
        </span>
        <p class="text-lg">{attrs.subtitle}</p>
        {m(
          m.route.Link,
          {
            selector: "a",
            href: attrs.url,
          },
          "Take Me"
        )}
      </div>
    </div>
  ),
};

export default MenuListCard;
