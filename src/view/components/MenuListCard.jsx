const MenuListCard = {
  view: ({ attrs }) => (
    <div>
      <div>
        <h3 class="font-bold text-xl text-gray-100 text-bold mb-2">
          {attrs.title}
        </h3>
        <span class="flex justify-end py-3 text-white">
          {/* <Icon id={attrs.icon} string={mountain} /> */}
        </span>
      </div>
      <p class="text-gray-100 text-sm">{attrs.subtitle}</p>
      <a
        href={attrs.url}
        class="text-gray-100 bold border-b-2 border-pastel-hover hover:text-pastel-hover"
      >
        Find out more...
      </a>
    </div>
  ),
};

export default MenuListCard;
