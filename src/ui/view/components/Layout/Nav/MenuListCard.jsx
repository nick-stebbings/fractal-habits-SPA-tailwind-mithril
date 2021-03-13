const MenuListCard = {
  view: ({ attrs }) => (
    <div
      class="text-balance-black rounded-2xl bg-gray-100"
      py-3
      px-6
      bg-gray-200
    >
      <div class="flex justify-between">
        <h3 class="text-center text-balance-black text-bold text-xl">
          {attrs.title}
        </h3>
        <span class="flex text-balance-mint py-3 px-2">
          {m.trust(attrs.icon)}
        </span>
      </div>
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
  ),
};

export default MenuListCard;
