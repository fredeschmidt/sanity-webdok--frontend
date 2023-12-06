import { defineNuxtConfig } from "nuxt";

export default {
  modules: ["@nuxtjs/sanity"],
  sanity: {
    projectId: "8pwnpbac",
    dataset: 'production',
		apiVersion: '2023-11-22'
  },
  css: ["@/assets/css/styles.css"]
};
