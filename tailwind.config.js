module.exports = {
  purge: [
    "./src/ui/**/*.html",
    "./src/ui/**/*.scss",
    "./src/ui/**/*.pcss",
    "./src/ui/**/*.jsx",
  ],
  theme: {
    colors: {
      gray: {
        50: "#F0F0F0",
        100: "#F8F8F8",
        200: "#E0E0E0",
        300: "#C8C8C8",
        400: "#888888",
        500: "#707070",
        600: "#505050",
        700: "#383838",
        800: "#282828",
        900: "#101010",
      },
      white: "white",
      black: "#1A140E",
      transparent: "transparent",
      balance: {
        digblue: {
          light: "#5568d2",
          dark: "#283a99",
          sat: "#2741cd",
          desat: "#3f51b5",
          gray: "#7a7a7a",
          brighten: "#4c62da",
          default: "#3349c1",
        },
        pshades: {
          light: "#634a36",
          dark: "#211912",
          sat: "#47301f",
          desat: "#3d3229",
          gray: "#3d3229",
          brighten: "#3d3229",
        },
        sshades: {
          light: "#f2aa53",
          dark: "#d0790f",
          sat: "#fb9417",
          desat: "#e3922f",
          gray: "#898989",
          brighten: "#ffac3c",
        },
        tershades: {
          light: "#d5e2b9",
          dark: "#a9c471",
          sat: "#c2da8d",
          desat: "#bccb9c",
          gray: "#d7dbc5",
          brighten: "#d8ecae",
        },
        buttonbg: {
          digblue: "#3349c1",
          success: "#71c475",
          successlighter: "#93cc96",
          submit: "#fb9417",
          reset: "#47301f",
          close: "#e74a33 ",
          closelighter: "#e06a58 ",
          neutral: "#3d3229",
          disabled: "#898989",
        },
        buttontext: {
          digblue: "#fff",
          success: "#fff",
          submit: "#fff",
          reset: "#211912",
          close: "#fff",
          neutral: "#fff",
          disabled: "#d8ecae",
        },
      },
    },

    extend: {
      boxShadow: {
        button: "0 0 0 1px #fffffe",
      },
      outline: {
        light: "2px solid #fffffe; outline-offset:-3px; outline-style: dashed",
      },
      fontFamily: {
        sans: [
          "Silka",
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
    customForms: (theme) => ({
      default: {
        date: {
          icon:
            '<svg fill="#e2e8f0" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>',
        },
        checkbox: {
          icon:
            '<svg fill="#fff" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" ><path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/></svg>',
        },
        radio: {
          icon:
            '<svg fill="#fff" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="3"/></svg>',
        },
      },
    }),
    // Replace the default Tailwind config here
  },
  corePlugins: {},
  plugins: [require("@tailwindcss/custom-forms")],
};
