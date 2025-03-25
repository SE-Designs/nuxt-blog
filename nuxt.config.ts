import Aura from "@primeuix/themes/aura";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["nuxt-primevue", "@unocss/nuxt", "@nuxt/icon"],

  runtimeConfig: {
    public: {
      apiUrl: process.env.API_URL,
    },
  },

  css: [
    "~/styles/app.css",
    "primevue/resources/themes/aura-light-noir/theme.css",
  ],
});
