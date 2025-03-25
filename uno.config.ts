import { defineConfig, presetWind3 } from "unocss";

import presetWebFonts from "@unocss/preset-web-fonts";

export default defineConfig({
  presets: [
    presetWind3(),
    presetWebFonts({
      provider: "google",
      fonts: {
        main: "Kanit",
        sans: "Roboto",
      },
    }),
  ],

  theme: {
    colors: {
      black: "#101010",
      "semi-black": "#232323",
      gray: "#868686",
      "semi-white": "#F3F3F3",
      white: "#FFFFFF",

      primary: "#9EFFBF",
      secondary: "#7941A7",
      highlight: "#E2BEFF",
      alternative: "#1059C8",
    },

    breakpoints: {
      // sm: "320px",
      // md: "640px",
    },
  },
  autocomplete: {
    //
  },
});
