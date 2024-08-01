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
        "gradient-conic":"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero": "url('/hero-bg.svg')",
        "img-1": "url('/img-1.png')",
        "img-2": "url('/img-2.png')",
        "boat": "url('/boat.png')",
      },
      gridTemplateColumns:{
        'custom':'repeat(auto-fit, minmax(300px, 1fr))'
      }
    },
  },
  plugins: [],
};
export default config;
