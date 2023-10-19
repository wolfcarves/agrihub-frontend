import { AxiosResponse } from "axios";
import { defaultConfig } from "./config/config";

export type AxiosReturn = Promise<AxiosResponse<any, any>>;
export type DefaultConfig = typeof defaultConfig;
