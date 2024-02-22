/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_CAPTCHA_ID: string;
  readonly VITE_CAPTCHA_CONTAINER_ID: string;
  readonly VITE_CAPTCHA_PRIVATE_KEY: string;
  readonly VITE_S3_BUCKET_BASEURL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
