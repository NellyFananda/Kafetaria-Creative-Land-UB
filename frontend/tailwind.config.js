/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/assets/img/bg.png')",
      },
      boxShadow: {
        "shadow-card": "10px 10px 0px 0px rgb(0 0 0)",
      },
    },
  },
  plugins: [],
};
