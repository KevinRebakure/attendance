/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#3F51B5",
        darkPrimary: "#303F9F",
        lightPrimary: "#C5CAE9",
        accent: "#4CAF50",
        primaryText: "#212121",
        secondaryText: "#757575",
        dividor: "#BDBDBD",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
