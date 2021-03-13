module.exports = {
  theme: {
    extend: {
      colors: {
        balance: {
          dp: "#261C15",
          lp: "#423124",
          secondary: "#ef9323",
          dg: "#E2E1E1",
          lg: "#eaddcf",
          hero: "#d7dbc5",
          lmint: "#F1FFC7",
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
      fontFamily: {
        pal: '"Palanquin Dark"',
        silka: "Silka",
        sans: [
          "Nunito",
          "Inter",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          '"Noto Sans"',
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
    },
    // Replace the default Tailwind config here
  },
  corePlugins: {},
  plugins: [require("@tailwindcss/custom-forms")],
};
