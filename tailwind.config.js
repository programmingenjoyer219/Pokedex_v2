/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class', // or 'media' or 'boolean'
  theme: {
    extend: {
      // Extend your theme here if needed
    },
  },
  variants: {
    extend: {
      // Extend your variants here if needed
    },
  },
  plugins: [],
};
