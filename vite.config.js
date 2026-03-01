import { copyFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

function copyStaticWebAppConfig() {
  return {
    name: "copy-static-web-app-config",
    writeBundle() {
      const source = resolve("staticwebapp.config.json");
      const destination = resolve("dist", "staticwebapp.config.json");

      if (existsSync(source)) {
        copyFileSync(source, destination);
      }
    }
  };
}

export default defineConfig({
  plugins: [react(), copyStaticWebAppConfig()],
  server: {
    host: true
  }
});
