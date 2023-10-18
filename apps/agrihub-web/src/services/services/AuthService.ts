/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class AuthService {
  /**
   * LOGIN
   * Authentication Login
   * @param requestBody
   * @returns any OK
   * @throws ApiError
   */
  public static postV1ApiAuthLogin(
    requestBody?: Record<string, any>
  ): CancelablePromise<Record<string, any>> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/v1/api/auth/login",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        400: `Bad Request`
      }
    });
  }

  /**
   * REGISTER
   * @param requestBody
   * @returns any Created
   * @throws ApiError
   */
  public static postV1ApiAuthRegister(
    requestBody?: Record<string, any>
  ): CancelablePromise<Record<string, any>> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/v1/api/auth/register",
      body: requestBody,
      mediaType: "application/json"
    });
  }

  /**
   * GET CURRENT USER
   * @returns any OK
   * @throws ApiError
   */
  public static getV1ApiAuthMe(): CancelablePromise<Record<string, any>> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/v1/api/auth/me"
    });
  }
}
