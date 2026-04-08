/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: ["visible", "delay-1", "delay-2", "delay-3"],
  theme: {
    extend: {
      fontFamily: {
        syne: ["Syne", "sans-serif"],
        mono: ["Space Mono", "monospace"],
      },
      colors: {
        bg: "#0a0a0f",
        bg2: "#0f0f17",
        bg3: "#141420",
        cyan: "#00e5cc",
        cyan2: "#00b8a4",
        amber: "#f5a623",
        text: "#e8e8f0",
        muted: "#6b7280",
        border: "rgba(0, 229, 204, 0.15)",
        card: "rgba(20, 20, 32, 0.8)",
        "nav-bg": "rgba(10, 10, 15, 0.92)",
      },
      animation: {
        scroll: "scrollAnim 2s infinite",
      },
      keyframes: {
        scrollAnim: {
          "0%": { opacity: 0, transform: "scaleY(0)", transformOrigin: "top" },
          "50%": { opacity: 1, transform: "scaleY(1)" },
          "100%": {
            opacity: 0,
            transform: "scaleY(0)",
            transformOrigin: "bottom",
          },
        },
      },
    },
  },
  plugins: [],
};
