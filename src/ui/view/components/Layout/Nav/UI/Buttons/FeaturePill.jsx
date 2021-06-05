// src/view/components/Layout/Nav/UI/Buttons/FeaturePill.jsx

const FeaturePill = {
  view: ({ attrs }) => (
    <div
      class="bg-balance-basic-gray nav-pill h-36 rounded-full my-1 text-xxl flex items-center justify-center py-1 mx-4"
      style={`cursor: pointer; clip-path: url(${attrs.clipPathUrl})`}
    >
      <span>{attrs.title}</span>
    </div>
  ),
};

export default FeaturePill;