<<<<<<< HEAD
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
export default ({ mode }) => {
  // Load app-level env vars to node-level env vars.
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    define: {
      "process.env.VITE_REACT_APP_CLOUDINARY_CLOUD_NAME": `"${process.env.VITE_REACT_APP_CLOUDINARY_CLOUD_NAME}"`,
      "process.env.VITE_REACT_APP_CLOUDINARY_UPLOAD_PRESET": `"${process.env.VITE_REACT_APP_CLOUDINARY_UPLOAD_PRESET}"`,
    },
    plugins: [react()],
  });
};
=======
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
>>>>>>> parent of 0b713d5 (pages setup + sidebar + header + create product initial form)
