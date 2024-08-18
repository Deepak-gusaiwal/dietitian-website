/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#FFF3F0",
          100: "#FFEBE5",
          200: "#FFD4C7",
          300: "#FFC0AD",
          400: "#FFA98F",
          500: "#FF9676",
          600: "#FF5B29",
          700: "#E03400",
          800: "#942300",
          900: "#4D1200",
          950: "#240800",
        },
        secondary: {
          50: "#FCEDF4",
          100: "#FADBE8",
          200: "#F5B8D1",
          300: "#F094BA",
          400: "#EB75A6",
          500: "#E6508F",
          600: "#DB1F6D",
          700: "#A11750",
          800: "#6B0F36",
          900: "#36081B",
          950: "#1B040D",
        },
        success: {
          50: "#E7FED8",
          100: "#D2FCB5",
          200: "#A1FA66",
          300: "#74F71C",
          400: "#4FBB07",
          500: "#307204",
          600: "#255903",
          700: "#1D4502",
          800: "#132C02",
          900: "#0A1901",
          950: "#040A00",
        },
      },
      fontFamily: {
        poppins: ["poppins", "sans-serif"],
        leagueGothic: ["league Gothic", "sans-serif"],
      },
    },
  },
  plugins: [],
};
