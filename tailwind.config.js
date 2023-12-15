/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  },
}

