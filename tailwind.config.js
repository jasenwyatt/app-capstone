/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Karla', 'sans-serif'],
        'serif': ['"Markazi Text"', 'serif'],
      },
      colors: {
        "forest": {
          50: "#EBEFEE",
          100: "#DAE2DF",
          200: "#B1C3BD",
          300: "#8CA69D",
          400: "#67847A",
          500: "#495E57",
          600: "#3A4B45",
          700: "#2D3935",
          800: "#1D2523",
          900: "#101413",
          950: "#070908"
        },
        "lemon": {
          50: "#FEFAE7",
          100: "#FDF5CE",
          200: "#FBECA2",
          300: "#F8E272",
          400: "#F6D841",
          500: "#F4CE14",
          600: "#C8A809",
          700: "#977F07",
          800: "#665605",
          900: "#312902",
          950: "#181401"
        },
        "sand": {
          50: "#FFFCFA",
          100: "#FEFAF5",
          200: "#FEF2E7",
          300: "#FDEAD8",
          400: "#FCE2CA",
          500: "#FBDABB",
          600: "#F8C08B",
          700: "#F5A052",
          800: "#E7770E",
          900: "#A9570A",
          950: "#743B07"
        },
        "peach": {
          50: "#FEF8F6",
          100: "#FCEFE8",
          200: "#FADED1",
          300: "#F6CAB6",
          400: "#F2B396",
          500: "#EE9972",
          600: "#EA8252",
          700: "#E56125",
          800: "#C44E18",
          900: "#893610",
          950: "#60260C"
        }
      }
    },
  },
  plugins: [],
}