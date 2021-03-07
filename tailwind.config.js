module.exports = {
  theme: {
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
      "50%": "50%",
      "40%": "40%",
    },
    extend: {
      colors: {
        balance: {
          dp: "#261C15",
          lp: "#423124",
          secondary: "#db7f0f",
          dg: "#E2E1E1",
          lg: "#eaddcf",
          hero: "#d7dbc5",
          lmint: "#fffffe",
          mint: "#bfd395",
          black: "#1A140E",
        },
      },
      boxShadow: {
        button: "0 0 0 1px #fffffe",
      },
      outline: {
        light: "2px solid #fffffe; outline-offset:1px; outline-style: dashed",
      },
    },
    // Replace the default Tailwind config here
  },
  corePlugins: {},
  plugins: [require("@tailwindcss/custom-forms")],
};
