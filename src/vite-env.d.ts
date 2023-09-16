/// <reference types="vite/client" />

/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string
    readonly DB_KEY: string
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }