import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-purple": "#290742",
        "secondary-purple": "#170027",
        "secondary-pink": "#9E6DC2",
        "primary-green": "#4FFF4B"
      },
      backgroundImage:{
        "custom-gradient":"linear-gradient(to right, #EF23F366, #C326E466, #8B2AD166, #5C2CC166)"
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'], // Aplica Roboto como fonte sans padrão
        poppins: ['Poppins', 'sans-serif'], // Adiciona Poppins
      },
    },
  },
  plugins: [],
};

export default config;
