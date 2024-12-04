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
      },

      fontFamily: {
        geistSans: "var(--font-geist-sans)",
        geistMono: "var(--font-geist-mono)",
        krona: "var(--font-krona)",
      },
    },
  },
  plugins: [],
} satisfies Config;
