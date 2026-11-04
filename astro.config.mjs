// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Manrope",
      cssVariable: "--sb-font-sans",
      weights: [400, 500, 600, 700, 800],
    },
    {
      provider: fontProviders.google(),
      name: "Anton",
      cssVariable: "--sb-font-display",
      weights: [400],
    },
    {
      provider: fontProviders.google(),
      name: "JetBrains Mono",
      cssVariable: "--sb-font-mono",
      weights: [400, 500, 600],
    },
  ],
});
