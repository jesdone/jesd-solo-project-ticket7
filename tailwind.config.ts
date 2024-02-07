import type { Config } from "tailwindcss";
const punycode = require('punycode');
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
