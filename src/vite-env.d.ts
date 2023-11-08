/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_CAPTCHA_ID: string;
  readonly VITE_CAPTCHA_CONTAINER_ID: string;
  readonly VITE_CAPTCHA_PRIVATE_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
