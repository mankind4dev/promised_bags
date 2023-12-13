/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: "Open Sans",
      secondary: "Loto",
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        lg: "0",
      },
    },
    screens: {
      sm: "620px",
      md: "720",
      lg: "1024px",
      xl: "1170px",
    },
    extend: {
      color: {
        primary: "#212353",
        secondary: "#4B5D68",
        accent: {
          primary: "#212353",
          primary_hover: "#9059DB",
          secondary: "#F063B8",
          secondary_hover: "#E350A9",
          tertiary: "#68C9BA",
        },
      },
      h1: {
        fontSize: "40px",
        fontWeight: 500,
      }
    },
  },
  plugins: [],
}

