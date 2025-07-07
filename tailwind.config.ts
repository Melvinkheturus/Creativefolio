import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#B965FF",
        background: "#121212",
        card: "#1D1D1D",
      },
      borderRadius: {
        card: "24px",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        inter: ["var(--font-inter)"],
        allura: ["var(--font-allura)"],
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
      },
      animation: {
        shimmer: 'shimmer 4s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config; 