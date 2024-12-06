import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./shared/components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        secondary: "var(--secondary)",
        neitral: "var(--neitral)",
        neitral2: "var(--neitral2)",
        active: "var(--active)",
        accent: "var(--accent)",
      },
    },
  },
  plugins: [],
};
export default config;
