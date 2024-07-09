import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        'primary': {
          '100': '#f7f2ff',
          '200': '#e7daff',
          '300': '#cfb5ff',
          '400': '#b58eff',
          '500': '#9862ef',
          '600': '#8042d8',
          '700': '#602ea9',
          '800': '#3f1b79',
        },
        'material': {
          '50': '#FAFAFA',
          '100': '#F5F5F5',
          '200': '#EEEEEE',
          '300': '#E0E0E0',
          '400': '#BDBDBD',
          '500': '#9E9E9E',
          '600': '#757575',
          '700': '#616161',
          '800': '#424242',
          '900': '#212121',
        },
        'open-color': {
          '100': '#f8f9fa',
          '200': '#f1f3f5',
          '300': '#e9ecef',
          '400': '#dee2e6',
          '500': '#ced4da',
          '600': '#adb5bd',
          '700': '#868e96',
          '800': '#495057',
          '900': '#343a40',
          '950': '#212529',
        }
      },
      variants: {
        extend: {
          textColor: ['hover'], // Enable hover variant for textColor utility
        },
      },
      fontFamily: {
        sans: ['var(--font-montserrat)']
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
