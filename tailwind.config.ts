const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html", "./src/**/*.{js,ts,jsx,tsx}",
    //  "./src/pages/**/*.{js,ts,jsx,tsx}",
    //  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    //  "./src/components/*/**/*.{js,ts,jsx,tsx,mdx}",
    //  "./src/themes/*/**/*.{js,ts,jsx,tsx,mdx}",
    //  "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '6rem',
        '2xl': '8rem',
      },
    },
    boxShadow: {
      md: "2px 4px 10px 0px rgba(0, 0, 0, 0.25)",
      // rest of the box shadow values
    },
    colors: {
      "brown": '#903D10',
      "primary": "#114683",
      "lightCyan": "#E6ECF2",
      "dark": "#222222",
      //   "gray": "#787A80",
    },
    screens: {
      // 'xs': { 'min': '350px' },

      'sm': { 'max': '768px' },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      // 'md': { 'max': '1023px' },
      'md': { 'max': '1023px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      // 'lg': { 'max': '1279px' },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      // 'xl': { 'max': '1535px' },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      '2xl': { 'min': '1536px' },
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      // colors: {
      //   primary: "#3498db",
      //   brown: "#964B00",
      //   white: "#ffffff",
      // },
      borderRadius: {
        '4xl': '2rem',
      }
    },
  },
  plugins: [],
});

