import { defineNuxtConfig } from "nuxt";

export default {
  modules: ["@nuxtjs/sanity"],
  sanity: {
    projectId: "8pwnpbac",
		apiVersion: '2023-11-22'
  },
  plugins: [
    '@/plugins/sanity.js'
  ],
  css: ["@/assets/css/styles.css"]
};
