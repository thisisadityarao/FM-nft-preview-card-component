/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      main: "hsl(217, 54%, 11%)",
      card: "hsl(216, 50%, 16%)",
      line: "hsl(215, 32%, 27%)",
      white: "hsl(0, 0%, 100%)",
      cyan: "hsl(178, 100%, 50%)",
      cyanLight: "hsla(178, 100%, 50%, 0.5)",
      softBlue: "hsl(215, 51%, 70%)",
    },
    fontFamily: {
      sans: ["Outfit", "sans-serif"],
    },
  },
  plugins: [],
};
