/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      primary: "var(--color-primary)",
      secondary: "var(--color-secondary)",
      danger: "var(--color-danger)",
      warning: "var(--color-warning)",
      info: "var(--color-info)",
      background: "var(--color-background)",
      white: "var(--color-white)",
      black: "var(--color-black)",
      overlay: "var(--color-overlay)"
    }
  },
  variants: {},
  plugins: [],
}