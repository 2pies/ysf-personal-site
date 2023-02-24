const headerHeight = 84;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        "main-w": 1300,
      },
      spacing: {
        header: headerHeight,
        "main-w": 1300,
        "main-h": `calc(100vh - ${headerHeight}px)`,
      },
      colors: {
        "link-gray": "rgb(156 163 175)",
        "text-gray": "rgb(107 114 128)",
      },
    },
  },
  plugins: [],
}
