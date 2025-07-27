/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Light Mode Colors (default)
        light: {
          background: "#FFFFFF",
          primary: "#333333",
          secondary: "#666666",
          accent: "#007BFF",
        },
        // Dark Mode Colors
        dark: {
          background: "#1E1E1E",
          primary: "#F8F8F8",
          secondary: "#BBBBBB",
          accent: "#66B2FF",
        },
      },
    },
  },
  plugins: [],
};
