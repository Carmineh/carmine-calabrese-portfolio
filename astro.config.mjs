// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  // Public URL of the site (canonical, sitemap, RSS, Open Graph)
  site: "https://carmine-calabrese.it",
  trailingSlash: "ignore",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "it"],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "en",
        locales: { en: "en-US", it: "it-IT" },
      },
    }),
  ],
  markdown: {
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Inter",
      cssVariable: "--sb-font-sans",
      weights: [400, 500, 600],
    },
    {
      provider: fontProviders.google(),
      name: "Space Grotesk",
      cssVariable: "--sb-font-display",
      weights: [400, 500, 600],
    },
    {
      provider: fontProviders.google(),
      name: "JetBrains Mono",
      cssVariable: "--sb-font-mono",
      weights: [400, 500],
    },
  ],
});
