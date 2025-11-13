import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path, { resolve } from "path";
import dts from "vite-plugin-dts";

const externalDependencies = [
  "react",
  "react-dom",
  "react-router-dom",
  "@mui/material",
  "@mui/icons-material",
  "@mui/x-data-grid",
  "@mui/x-date-pickers",
  "@emotion/react",
  "@emotion/styled",
  "dayjs",
];

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: ["@emotion"],
      },
    }),
    dts({
      insertTypesEntry: true,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  build: {
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "UIComponentKit",
      formats: ["es", "cjs"],
      fileName: (format) => `ui-component-kit.${format}.js`,
    },
    rollupOptions: {
      external: (id) => externalDependencies.some((dep) => id.startsWith(dep)),
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react-router-dom": "ReactRouterDOM",
          "@mui/material": "MuiMaterial",
          "@mui/icons-material": "MuiIconsMaterial",
          "@mui/x-data-grid": "MuiXDataGrid",
          "@mui/x-date-pickers": "MuiXDatePickers",
          "@emotion/react": "EmotionReact",
          "@emotion/styled": "EmotionStyled",
          dayjs: "dayjs",
        },
      },
    },
  },
});
