
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6A1B9A", // Replace with the exact purple shade from Figma
        secondary: "#AB47BC", // Lighter purple from Figma
        dark: "#1E1E1E", // Dark mode background
        light: "#F3E5F5", // Light purple background
      },
    },
  },
  plugins: [],
};


