import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
export default defineConfig(async ({ mode }) => {
    const { componentTagger } = await import("lovable-tagger");

    return {
        server: {
            host: "::",
            port: 8080,
        },
        plugins: [
            react(),
            mode === 'development' && componentTagger(),
        ].filter(Boolean),
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "./src"),
            },
        },
    };
});

