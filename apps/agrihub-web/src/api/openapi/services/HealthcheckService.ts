/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class HealthcheckService {

  /**
   * Responds if the app is up and running
   * @returns any App is up and running
   * @throws ApiError
   */
  public static getHealthcheck(): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/healthcheck',
    });
  }

}
