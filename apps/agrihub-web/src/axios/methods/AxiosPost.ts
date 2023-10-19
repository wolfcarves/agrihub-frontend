import axios from "axios";
import { defaultConfig } from "@axios/config/config";
import { AxiosRequestConfig } from "axios";

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

//Instances

export const AxiosPost = (
  url: string,
  data: any,
  config: AxiosRequestConfig<any> | undefined | null
) => {
  const configUse = config ?? defaultConfig;

  return axios.post(url, data, configUse);
};

export const AxiosGet = (
  url: string,
  config: AxiosRequestConfig<any> | undefined | null
) => {
  const configUse = config ?? defaultConfig;

  return axios.post(url, configUse);
};
