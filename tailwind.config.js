module.exports = {
  theme: {
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
      "50%": "50%",
    },
    // linearGradientColors: (theme) => theme("colors"),
    // radialGradientColors: (theme) => theme("colors"),
    // conicGradientColors: (theme) => theme("colors"),
    // Extend the default Tailwind config here
    extend: {},
    // Replace the default Tailwind config here
  },
  corePlugins: {},
  plugins: [require("tailwindcss-gradients")],
};
