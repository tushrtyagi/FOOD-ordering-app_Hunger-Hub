import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/FOOD-ordering-app_Hunger-Hub/",
  plugins: [react()],
});
