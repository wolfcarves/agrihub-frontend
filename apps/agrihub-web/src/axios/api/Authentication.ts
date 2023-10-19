import { AxiosPost } from "@axios/methods/AxiosPost";
import { AxiosReturn } from "@axios/types";

export const postUserAuthLogin = (data: Record<string, any>): AxiosReturn =>
  AxiosPost("api/auth/login", data, null);

export const postUserAuthRegister = (data: Record<string, any>): AxiosReturn =>
  AxiosPost("api/auth/register", data, null);
