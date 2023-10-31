import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { loadEnv } from "vite";

export default defineConfig(({ command, mode }) => {
  // Load environment variables from .env files
  const env = loadEnv(mode, process.cwd());

  return {
    define: {
      "process.env.REACT_APP_CLOUDINARY_CLOUD_NAME": JSON.stringify(
        env.REACT_APP_CLOUDINARY_CLOUD_NAME
      ),
      "process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET": JSON.stringify(
        env.REACT_APP_CLOUDINARY_UPLOAD_PRESET
      ),
      // If you want to exposes all env variables, which is not recommended
      // 'process.env': env
    },
    plugins: [react()],
  };
});
