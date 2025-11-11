import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import svgr from "vite-plugin-svgr";

export default defineConfig({
    plugins: [
        react(),
        svgr({
            include: "**/*.svg",
        }),
    ],
    server: {
        host: "0.0.0.0",
        port: 3000,
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
});
