/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CropReportResponse } from '../models/CropReportResponse';
import type { CropStatisticsResponse } from '../models/CropStatisticsResponse';
import type { FarmerGraphStackedBarResponse } from '../models/FarmerGraphStackedBarResponse';
import type { FarmerTotalHarvestedResponse } from '../models/FarmerTotalHarvestedResponse';
import type { NewCommunityCropReport } from '../models/NewCommunityCropReport';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ReportsService {

    /**
     * Submit a community crop report
     * @returns CropReportResponse Report submitted successfully
     * @throws ApiError
     */
    public static postApiReportsCrop({
formData,
}: {
formData: NewCommunityCropReport,
}): CancelablePromise<CropReportResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/reports/crop',
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                400: `Validation Error`,
                401: `Unauthorized`,
                404: `Not Found Error`,
                500: `Server Error`,
            },
        });
    }

    /**
     * Get stacked bar graph data for farmer reports
     * @returns FarmerGraphStackedBarResponse Successful response
     * @throws ApiError
     */
    public static getApiReportsFarmerGraphStackedBar(): CancelablePromise<FarmerGraphStackedBarResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/reports/farmer/graph/stacked-bar',
            errors: {
                400: `Validation Error`,
                401: `Unauthorized`,
                404: `Not Found Error`,
                500: `Server Error`,
            },
        });
    }

    /**
     * Get total harvested data for farmer reports
     * @returns FarmerTotalHarvestedResponse Successful response
     * @throws ApiError
     */
    public static getApiReportsFarmerTotalHarvested(): CancelablePromise<FarmerTotalHarvestedResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/reports/farmer/total-harvested',
            errors: {
                400: `Validation Error`,
                401: `Unauthorized`,
                404: `Not Found Error`,
                500: `Server Error`,
            },
        });
    }

    /**
     * Get crop statistics data for reports
     * @returns CropStatisticsResponse Successful response
     * @throws ApiError
     */
    public static getApiReportsCropStatistics({
name,
}: {
/**
 * Crop name
 */
name: string,
}): CancelablePromise<CropStatisticsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/reports/crop/statistics/{name}',
            path: {
                'name': name,
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
