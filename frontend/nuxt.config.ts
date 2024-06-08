export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "nuxt-icon",
    "@nuxtjs/google-fonts",
    "nuxt-lodash",
  ],
  runtimeConfig: {
    mongodbUri: process.env.MONGODB_URI,
  },
  css: ["@/assets/css/main.css"],
  googleFonts: {
    families: {
      Roboto: true,
    },
  },
});
