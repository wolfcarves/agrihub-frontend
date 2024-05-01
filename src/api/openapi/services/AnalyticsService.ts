/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HarvestRateResponse } from '../models/HarvestRateResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AnalyticsService {

    /**
     * Calculate latest harvest rate analytics
     * @returns HarvestRateResponse Latest harvest rate calculated successfully
     * @throws ApiError
     */
    public static getApiAnalyticsLatestHarvestRate({
id,
}: {
/**
 * ID of the user or farm
 */
id: string,
}): CancelablePromise<HarvestRateResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/analytics/latest/harvest-rate/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Validation Error`,
                401: `Unauthorized`,
                404: `Not Found Error`,
                500: `Server Error`,
            },
        });
    }

}
