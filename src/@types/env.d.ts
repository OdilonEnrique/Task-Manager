/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API: string;
  readonly VITE_STORAGE_USERID_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
