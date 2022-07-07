module.exports = {
  content: ["./vite.config.ts", "./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    // https://tailwindcss.com/docs/typography-plugin
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
  ],
  darkMode: "class",
};
