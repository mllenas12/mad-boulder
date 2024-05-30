import type { Config } from "tailwindcss";
const colors = require('tailwindcss/colors')
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          900: '#4C68D5',
          800: '#6174D9',
          700: '#7381DD',
          600: '#858EE1',
          500: '#959CE5',
          400: '#A5A9E9',
          300: '#B4B7ED',
          200: '#C3C5F1',
          100: '#E1E2F8'
        },
        bneutral: {
          900: '#0C1024',
          800: '#27364B',
          700: '#39465A',
          600: '#4B5669',
          500: '#5D6778',
          400: '#707988',
          300: '#838B98',
          200: '#979DA9',
          100: '#ABB0B9'
        },
        wneutral: {
          500: '#E2E8F0',
          400: '#ECF0F5',
          300: '#F1F4F9',
          200: '#FAFBFF',
          100: '#FFFFFF'
        },
        semantic2: {
          900: '#036B30',
          800: '#2A7841',
          700: '#428553',
          600: '#589264',
          500: '#6DA076',
          400: '#81AD89',
          300: '#96BA9C',
          200: '#BFD6C2',
          100: '#D4E3D6'
        },
        semantic3: {
          900: '#E4A704',
          800: '#E8AF2F',
          700: '#EDB648',
          600: '#F0BE5E',
          500: '#F4C673',
          400: '#F7CE87',
          300: '#F9D69B',
          200: '#FCDEAF',
          100: '#FCDEAF'
        },

      }
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },

    },

  },
  darkMode: "class",
  daisyui: {
    themes: ["light"]
  },
  plugins: [require("daisyui")]
};
export default config;
