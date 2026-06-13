import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const basePath = process.env.BASE_PATH ?? "/public";

export default defineConfig({
  vite: { base: basePath },
  tanstackStart: {
    spa: {
      enabled: true,
      prerender: {
        outputPath: "/index",
        crawlLinks: true,
      },
    },
    prerender: {
      enabled: true,
      autoStaticPathsDiscovery: true,
      crawlLinks: true,
    },
  },
});
