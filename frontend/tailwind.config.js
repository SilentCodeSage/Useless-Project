/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Includes all files in src directory
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
