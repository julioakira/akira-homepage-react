/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./public/*.{html,js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      sans: ["LatoRegular", ...defaultTheme.fontFamily.sans],
      "sans-medium": ["LatoRegular"],
      serif: ["SolwayRegular", ...defaultTheme.fontFamily.serif],
      "serif-medium": ["SolwayMedium"],
    },
    extend: {
			colors: {
				// night mode palette
        "pale-purple": "#E5D9F2",
        "magnolia": "#F5EFFF",
        "periwinkle": "#CDC1FF",
        "tropical-indigo": "#A594F9",
        "medium-slate-blue": "#7371FC",
        
        // background
        "bunker": "#22272E",
        "black_russian": "#202023",
        // light mode palette
        "peach": "#F3B391",
        "desert-sand": "#F6D4BA",
        "cornsilk": "#FEFADC",
        "wewak": "#F1A09E",
        // details
				"akira-blue": "#009DDC",
				"akira-red": "#FF5555",
			},
		},
  },
  darkMode: "class",
  plugins: [],
}
