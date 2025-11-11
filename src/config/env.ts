export const env = {
  environment: import.meta.env.VITE_ENV,
  appName: import.meta.env.VITE_APP_NAME,
  enableAnalytics: import.meta.env.VITE_ENABLE_ANALYTICS === "true",
  showDebugTools: import.meta.env.VITE_SHOW_DEBUG_TOOLS === "true",
};
