module.exports = {
  plugins: [
    require('postcss-import')({
      plugins: [
      ],
      path: ['./node_modules'],
    }),
    require('tailwindcss')('./tailwind.config.js'),
    require('postcss-preset-env')({
      autoprefixer: { },
      features: {
        'nesting-rules': true,
      },
    }),
    require('@fullhuman/postcss-purgecss')({
      content: [
        './**/*.{js,jsx,ts,tsx}',
      ],
      defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
      safelist: ['html', 'body'],
    }),
  ],
};
