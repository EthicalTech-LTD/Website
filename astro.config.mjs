// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import sentry from "@sentry/astro";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  integrations: [
    sentry({
      project: "ethicaltechuk-website",
      org: "ethicaltech-uk",
      authToken: process.env.SENTRY_AUTH_TOKEN,
    }),
    react(),
  ],
  vite: {
    resolve: {
      alias: {
        "@": "/src",
      },
    },
    plugins: [tailwindcss(), svgr()],
  },
});
