import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'stars-light': "url('/getBG2.png')",
        'stars-dark': "url('/getBG.png')",
        'hero-dark': "url('/hero.png')",
      },
      fontFamily: {
        optima : ["Optima Bold", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
      colors:{
        primaryWhite: "#F2F2F2",
        primaryTextGrey: "#454545"
      }
    },
  },
  plugins: [],
};
export default config;
