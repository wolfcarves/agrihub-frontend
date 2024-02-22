/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CommunityCropReportsResponse } from '../models/CommunityCropReportsResponse';
import type { CropReportResponse } from '../models/CropReportResponse';
import type { CropReportViewResponse } from '../models/CropReportViewResponse';
import type { CropStatisticsResponse } from '../models/CropStatisticsResponse';
import type { FarmerGraphGrowthHarvestResponse } from '../models/FarmerGraphGrowthHarvestResponse';
import type { FarmerGraphPiechartResponse } from '../models/FarmerGraphPiechartResponse';
import type { FarmerGraphStackedBarResponse } from '../models/FarmerGraphStackedBarResponse';
import type { FarmerGraphTotalHarvestResponse } from '../models/FarmerGraphTotalHarvestResponse';
import type { FarmerTotalHarvestedResponse } from '../models/FarmerTotalHarvestedResponse';
import type { FarmWithGrowthRate } from '../models/FarmWithGrowthRate';
import type { FavouriteCropData } from '../models/FavouriteCropData';
import type { GrowthRateResponse } from '../models/GrowthRateResponse';
import type { HarvestedWitheredData } from '../models/HarvestedWitheredData';
import type { LearningMaterialReport } from '../models/LearningMaterialReport';
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
     * Get farmer graph piechart data
     * @returns FarmerGraphPiechartResponse Successful response
     * @throws ApiError
     */
    public static getApiReportsFarmerGraphPiechart(): CancelablePromise<FarmerGraphPiechartResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/reports/farmer/graph/piechart',
            errors: {
                400: `Validation Error`,
                401: `Unauthorized`,
                404: `Not Found Error`,
                500: `Server Error`,
            },
        });
    }

    /**
     * Get farmer graph total harvest data
     * @returns FarmerGraphTotalHarvestResponse Successful response
     * @throws ApiError
     */
    public static getApiReportsFarmerGraphTotalHarvest(): CancelablePromise<FarmerGraphTotalHarvestResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/reports/farmer/graph/total-harvest',
            errors: {
                400: `Validation Error`,
                401: `Unauthorized`,
                404: `Not Found Error`,
                500: `Server Error`,
            },
        });
    }

    /**
     * Get farmer graph growth harvest data
     * @returns FarmerGraphGrowthHarvestResponse Successful response
     * @throws ApiError
     */
    public static getApiReportsFarmerGraphGrowthHarvest(): CancelablePromise<FarmerGraphGrowthHarvestResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/reports/farmer/graph/growth-harvest',
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

    /**
     * Get crop reports by ID
     * @returns CommunityCropReportsResponse Successful response
     * @throws ApiError
     */
    public static getApiReportsCropReport({
id,
search,
page,
perpage,
filter,
sort,
}: {
/**
 * ID of the farm
 */
id: string,
/**
 * Search term
 */
search?: string,
/**
 * Page number
 */
page?: string,
/**
 * Records per page
 */
perpage?: string,
/**
 * Array of filters
 */
filter?: Array<string>,
/**
 * Sorting parameter
 */
sort?: string,
}): CancelablePromise<CommunityCropReportsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/reports/crop/report/{id}',
            path: {
                'id': id,
            },
            query: {
                'search': search,
                'page': page,
                'perpage': perpage,
                'filter': filter,
                'sort': sort,
            },
            errors: {
                400: `Validation Error`,
                401: `Unauthorized`,
                404: `Not Found Error`,
                500: `Server Error`,
            },
        });
    }

    /**
     * Get crop report view by ID
     * @returns CropReportViewResponse Successful response
     * @throws ApiError
     */
    public static getApiReportsCropReportView({
id,
}: {
/**
 * ID of the crop report
 */
id: string,
}): CancelablePromise<CropReportViewResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/reports/crop/report/view/{id}',
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

    /**
     * Get the growth rate of a crop
     * @returns GrowthRateResponse Successful response
     * @throws ApiError
     */
    public static getApiReportsCropGrowthRate(): CancelablePromise<GrowthRateResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/reports/crop/growth-rate',
            errors: {
                400: `Validation Error`,
                401: `Unauthorized`,
                404: `Not Found Error`,
                500: `Server Error`,
            },
        });
    }

    /**
     * Get learning materials report
     * @returns LearningMaterialReport Successful response
     * @throws ApiError
     */
    public static getApiReportsLearningMaterials(): CancelablePromise<Array<LearningMaterialReport>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/reports/learning-materials',
            errors: {
                400: `Validation Error`,
                401: `Unauthorized`,
                404: `Not Found Error`,
                500: `Server Error`,
            },
        });
    }

    /**
     * Retrieve harvested and withered data for a specific period
     * @returns HarvestedWitheredData Array of harvested and withered data for each month
     * @throws ApiError
     */
    public static getApiReportsAdminGraphHarvestedWithered({
year,
start,
end,
}: {
/**
 * The year for which data is requested
 */
year?: string,
/**
 * The start date for the period
 */
start?: string,
/**
 * The end date for the period
 */
end?: string,
}): CancelablePromise<Array<HarvestedWitheredData>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/reports/admin/graph/harvested-withered',
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

    /**
     * Retrieve data for favourite crops
     * @returns FavouriteCropData Array of favourite crops data
     * @throws ApiError
     */
    public static getApiReportsAdminFavouriteCrops(): CancelablePromise<Array<FavouriteCropData>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/reports/admin/favourite/crops',
            errors: {
                400: `Validation Error`,
                401: `Unauthorized`,
                404: `Not Found Error`,
                500: `Server Error`,
            },
        });
    }

    /**
     * Get farms with the lowest average growth rate
     * @returns FarmWithGrowthRate OK
     * @throws ApiError
     */
    public static getApiReportsAdminLowestGrowthRate(): CancelablePromise<FarmWithGrowthRate> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/reports/admin/lowest/growth-rate',
        });
    }

}
