module.exports = {
  theme: {
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
      "50%": "50%",
      "40%": "40%",
    },
    // linearGradientColors: (theme) => theme("colors"),
    // radialGradientColors: (theme) => theme("colors"),
    // conicGradientColors: (theme) => theme("colors"),
    // Extend the default Tailwind config here
    extend: {
      colors: {
        balance: {
          alert: "#F25042",
          success: "#80E055",
          info: "#56CCF2",
          darkprimary: "#CFDC4F",
          lightprimary: "#E8F18F",
          darkbg: "#50442E",
          lightbg: "#8C7851",
          darkgray: "#E2E1E1",
          lightgray: "#F1EDEB",
          lilac: "#EDD3F8",
          hero: "#c5e1a5",
          heavyblue: "#121428",
        },
      },
      outline: {
        light: "2px solid #0000ff",
      },
    },
    // Replace the default Tailwind config here
  },
  corePlugins: {},
  plugins: [require("tailwindcss-gradients")],
};
