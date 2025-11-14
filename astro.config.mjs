// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import solidJs from "@astrojs/solid-js";
import sentry from "@sentry/astro";

// https://astro.build/config
export default defineConfig({
  integrations: [
    solidJs(),
    sentry({
      project: "ethicaltechuk-website",
      org: "ethicaltech-uk",
      authToken: process.env.SENTRY_AUTH_TOKEN,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
