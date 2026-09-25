import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://soewaiyanag.github.io",
  base: "/space-tourism",
  vite: {
    plugins: [tailwindcss()],
  },
});
