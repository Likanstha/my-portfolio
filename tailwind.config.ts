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
        progressBar: "#f8f8f8",
      },
      colors: {
        primaryText: "#000000",
        secondaryText: "#9a9a9a",
        sidebarText: "#475569",
      },
      borderColor: {
        primaryBorder: "#9a9a9a",
        secondaryBorder: "#000000",
      },
    },
  },
  plugins: [],
};
export default config;
