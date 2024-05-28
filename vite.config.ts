import { defineConfig } from "vite";
import legacy from "@vitejs/plugin-legacy";

const legacyPluginOptions = {
  modernTargets: "since 2023-01-01, not dead",
  modernPolyfills: true,
  renderLegacyChunks: false,
} as const;

export default defineConfig({
  plugins: [
    legacy(legacyPluginOptions),
  ],
  build: {
    target: [
      "chrome109",
      "edge109",
      "firefox109",
      "ios16.3",
      "safari16.3",
    ],
  },
});
