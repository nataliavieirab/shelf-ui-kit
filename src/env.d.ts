/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_NAME: string;
  readonly VITE_DEFAULT_THEME: string;
  readonly VITE_API_URL: string;
  readonly VITE_ENABLE_ANALYTICS: string;
  readonly VITE_ENV: string;
  readonly VITE_SHOW_DEBUG_TOOLS?: string;
  readonly VITE_DEFAULT_LANGUAGE?: string;
  readonly VITE_PRIMARY_COLOR?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
