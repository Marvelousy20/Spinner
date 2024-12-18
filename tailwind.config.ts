import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        "welcome-gradient":
          "linear-gradient(358.05deg, #FF8000 -40.75%, #FFFFFF 98.27%)",
        "spinner-gradient":
          "linear-gradient(358.05deg, #FF8000 20.75%, #FFFFFF 98.27%)",
        "overlay-gradient":
          "linear-gradient(180deg, #170F0C 0%, #2F1201 140.22%)",
        "button-gradient": "linear-gradient(180deg, #EE7F0E 0%, #884908 100%);",
        "nft-gradient": "linear-gradient(180deg, #EE7F0E 0%, #884908 100%)",
      },

      boxShadow: {
        customInset: "inset 0px 1.12px 0px 0px rgba(37, 75, 37, 0.2)",
        glow: "0 0 10px 4px rgba(255, 165, 0, 0.5)",
      },
      fontFamily: {
        geistSans: "var(--font-geist-sans)",
        geistMono: "var(--font-geist-mono)",
        krona: "var(--font-krona)",
        nunito: "var(--font-nunito)",
      },
    },
  },
  plugins: [],
} satisfies Config;
