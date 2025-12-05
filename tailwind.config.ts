import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-bg': '#1E0A4E', // Dark purple/blue background
        'secondary-bg': '#0D052C', // A slightly darker shade if needed, derived from primary
        'accent-yellow': '#FFE500',
        'accent-blue': '#7ED9FF',
        'accent-purple': '#9D4EDD',
        'text-light': '#E0E0E0',
        'text-dark': '#B0B0B0',
        'button-blue': '#6DD5ED', // "Got SPKZ?" background
        'mostro-green': '#3FD9FF', // Revelcy/Mostro text color
        'roadmap-green': '#00FF00', // Brighter green for roadmap dots
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
