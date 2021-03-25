module.exports = {
  purge: [
    './src/ui/**/*.html',
    './src/ui/**/*.scss',
    './src/ui/**/*.pcss',
    './src/ui/**/*.jsx',
  ],
  theme: {
    extend: {
      width: {
        15: '3.6rem',
        17: '4.25rem',
      },
      colors: {
        balance: {
          dp: '#261C15',
          lp: '#423124',
          secondary: '#ef9323',
          dg: '#E2E1E1',
          lg: '#eaddcf',
          hero: '#d7dbc5',
          lmint: '#F1FFC7',
          mint: '#bfd395',
          black: '#1A140E',
        },
      },

      boxShadow: {
        button: '0 0 0 1px #fffffe',
      },
      outline: {
        light: '2px solid #fffffe; outline-offset:1px; outline-style: dashed',
      },
      fontFamily: {
        sans: [
          'Silka',
          'Nunito',
          'Inter',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
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
  plugins: [require('@tailwindcss/custom-forms')],
};
