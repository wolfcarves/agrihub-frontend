/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MonthlyGrowthRate } from '../models/MonthlyGrowthRate';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ReportService {

    /**
     * Get monthly growth rate
     * @returns MonthlyGrowthRate Monthly growth rate data
     * @throws ApiError
     */
    public static getApiReportsAdminGrowthRateMonthly({
year,
start,
end,
}: {
/**
 * The year to filter the data
 */
year?: string,
/**
 * The start date to filter the data
 */
start?: string,
/**
 * The end date to filter the data
 */
end?: string,
}): CancelablePromise<MonthlyGrowthRate> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/reports/admin/growth-rate/monthly',
            query: {
                'year': year,
                'start': start,
                'end': end,
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
