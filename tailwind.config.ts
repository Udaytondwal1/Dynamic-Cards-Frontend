import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        'inter': ["Inter", "system-ui"],
        'poppins': ["Poppins", "system-ui"],
      },
      colors: {
        'darkMC': '#292B32',
        'buttonC': '#2C9CF0',
        'darkCC': '#3B3E47',
        'gredientT': '#18282A',
        'gredientB': '#221A2C',
      },
    },
    plugins: [],
  },
};
export default config;
