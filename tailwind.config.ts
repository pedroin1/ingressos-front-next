import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "rgba(25,30,36,1)",
        secondary: "#2a323c",
        bar: "#1d232a",
        "btn-primary": "#7480ff",
        input: "#1d232a",
      },
      textColor: {
        default: "#a6adbb",
        "btn-primary": "#050617",
        subtitle: "#7480ff",
      },
      gridTemplateColumns: {
        "auto-fit-cards": "repeat(auto-fit, minmax(277px, 1fr))",
      },
      screens: {
        small: { max: "600px" },
        medium: { max: "960px" },
        large: { max: "1800px" },
      },
      margin: {
        "0-auto": "0 auto",
      },
    },
  },
  plugins: [],
};
export default config;
