import cloudflare from "@astrojs/cloudflare";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, envField, fontProviders } from "astro/config";

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  adapter: cloudflare(),
  build: {
    format: "file",
  },
  env: {
    schema: {
      PUBLIC_GTM_CONTAINER_ID: envField.string({
        access: "public",
        context: "client",
      }),
    },
  },
  experimental: {
    fonts: [
      // Inter: sans-serif typeface
      // @see https://fonts.google.com/specimen/Inter/about
      {
        cssVariable: "--font-inter",
        name: "Inter",
        provider: fontProviders.google(),
        styles: ["normal", "italic"],
        subsets: ["latin"],
        weights: ["100 900"],
      },
      // Space Grotesk: display typeface
      // @see https://fonts.google.com/specimen/Space+Grotesk/about
      {
        cssVariable: "--font-space-grotesk",
        name: "Space Grotesk",
        provider: fontProviders.google(),
        styles: ["normal"],
        subsets: ["latin"],
        weights: ["300 700"],
      },
    ],
  },
  integrations: [sitemap()],
  site: "https://cookiebot-demo.mail-25a.workers.dev",
  trailingSlash: "never",
  vite: {
    plugins: [
      // @ts-expect-error https://github.com/withastro/astro/issues/14030
      tailwindcss(),
    ],
  },
});
