/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: "#101010",
        light: "#FCFFFB",
        border: "#DFDFDF",
        accent: "#12BD0F",
        "accent-dark": "#11830F"
      }
    },
  },
  plugins: [],
}
