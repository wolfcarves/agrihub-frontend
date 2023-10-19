import { AxiosRequestConfig } from "axios";

export const defaultConfig = {
  baseURL: import.meta.env.VITE_API_URL ?? "",
  headers: {
    Accept: ["application/json", "x-www-form-urlendcoded, form-data"]
  }
} satisfies AxiosRequestConfig;
