/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AnalyticsOverviewPieChartResponse } from '../models/AnalyticsOverviewPieChartResponse';
import type { AnalyticsOverviewUserFeedbackResponse } from '../models/AnalyticsOverviewUserFeedbackResponse';
import type { CommonOverviewResponse } from '../models/CommonOverviewResponse';
import type { CommunityCropReportsResponse } from '../models/CommunityCropReportsResponse';
import type { CropDistribution } from '../models/CropDistribution';
import type { CropReportResponse } from '../models/CropReportResponse';
import type { CropReportViewResponse } from '../models/CropReportViewResponse';
import type { CropStatisticsResponse } from '../models/CropStatisticsResponse';
import type { DetailedResourceCount } from '../models/DetailedResourceCount';
import type { DistrictFarmData } from '../models/DistrictFarmData';
import type { FarmerGraphGrowthHarvestResponse } from '../models/FarmerGraphGrowthHarvestResponse';
import type { FarmerGraphPiechartResponse } from '../models/FarmerGraphPiechartResponse';
import type { FarmerGraphStackedBarResponse } from '../models/FarmerGraphStackedBarResponse';
import type { FarmerGraphTotalHarvestResponse } from '../models/FarmerGraphTotalHarvestResponse';
import type { FarmerTotalHarvestedResponse } from '../models/FarmerTotalHarvestedResponse';
import type { FarmLandSizeAnalytics } from '../models/FarmLandSizeAnalytics';
import type { FarmLandSizeByDistrict } from '../models/FarmLandSizeByDistrict';
import type { FarmWithGrowthRate } from '../models/FarmWithGrowthRate';
import type { FavouriteCropData } from '../models/FavouriteCropData';
import type { ForumCount } from '../models/ForumCount';
import type { ForumOverview } from '../models/ForumOverview';
import type { GrowthRateDistribution } from '../models/GrowthRateDistribution';
import type { GrowthRateResponse } from '../models/GrowthRateResponse';
import type { HarvestDistribution } from '../models/HarvestDistribution';
import type { HarvestedWitheredData } from '../models/HarvestedWitheredData';
import type { InactiveFarmReport } from '../models/InactiveFarmReport';
import type { LearningMaterialReport } from '../models/LearningMaterialReport';
import type { MonthlyGrowthRate } from '../models/MonthlyGrowthRate';
import type { NewCommunityCropReport } from '../models/NewCommunityCropReport';
import type { PaginationData } from '../models/PaginationData';
import type { PreDefinedMessages } from '../models/PreDefinedMessages';
import type { ReportedQuestionList } from '../models/ReportedQuestionList';
import type { ResourceCount } from '../models/ResourceCount';

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
    public static getApiReportsFarmerGraphStackedBar({
month,
year,
}: {
/**
 * Month for which to retrieve growth rate distribution
 */
month?: string,
/**
 * Year for which to retrieve growth rate distribution
 */
year?: string,
}): CancelablePromise<FarmerGraphStackedBarResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/reports/farmer/graph/stacked-bar',
            query: {
                'month': month,
                'year': year,
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
    public static getApiReportsFarmerGraphGrowthHarvest({
month,
year,
}: {
/**
 * Month for which to retrieve growth rate distribution
 */
month?: string,
/**
 * Month for which to retrieve growth rate distribution
 */
year?: string,
}): CancelablePromise<FarmerGraphGrowthHarvestResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/reports/farmer/graph/growth-harvest',
            query: {
                'month': month,
                'year': year,
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
month,
page,
perpage,
filter,
order,
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
 * Month Term (1-12)
 */
month?: string,
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
order?: 'asc' | 'desc',
}): CancelablePromise<CommunityCropReportsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/reports/crop/report/{id}',
            path: {
                'id': id,
            },
            query: {
                'search': search,
                'month': month,
                'page': page,
                'perpage': perpage,
                'filter': filter,
                'order': order,
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
    public static getApiReportsCropReportExisting({
id,
search,
page,
perpage,
filter,
order,
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
order?: 'asc' | 'desc',
}): CancelablePromise<CommunityCropReportsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/reports/crop/report/existing/{id}',
            path: {
                'id': id,
            },
            query: {
                'search': search,
                'page': page,
                'perpage': perpage,
                'filter': filter,
                'order': order,
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
     * Set report as inactive
     * @returns any Event deleted successfully
     * @throws ApiError
     */
    public static postApiReportsCropReportInactive({
id,
}: {
/**
 * The ID of the report to be set as inactive
 */
id: string,
}): CancelablePromise<{
message?: string;
}> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/reports/crop/report/inactive/{id}',
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
    public static getApiReportsAdminLowestGrowthRate({
order,
}: {
order?: 'asc' | 'desc',
}): CancelablePromise<Array<FarmWithGrowthRate>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/reports/admin/lowest/growth-rate',
            query: {
                'order': order,
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

    /**
     * Get count of resources
     * @returns ResourceCount Count of resources
     * @throws ApiError
     */
    public static getApiReportsAdminResourcesCount(): CancelablePromise<ResourceCount> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/reports/admin/resources/count',
            errors: {
                400: `Validation Error`,
                401: `Unauthorized`,
                404: `Not Found Error`,
                500: `Server Error`,
            },
        });
    }

    /**
     * Get detailed count of resources
     * @returns DetailedResourceCount Detailed count of resources
     * @throws ApiError
     */
    public static getApiReportsAdminResourcesCountDetailed(): CancelablePromise<DetailedResourceCount> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/reports/admin/resources/count/detailed',
            errors: {
                400: `Validation Error`,
                401: `Unauthorized`,
                404: `Not Found Error`,
                500: `Server Error`,
            },
        });
    }

    /**
     * Get farms count and total harvest by district
     * @returns DistrictFarmData Farms count and total harvest by district
     * @throws ApiError
     */
    public static getApiReportsAdminFarmsDistrict(): CancelablePromise<Array<DistrictFarmData>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/reports/admin/farms/district',
            errors: {
                400: `Validation Error`,
                401: `Unauthorized`,
                404: `Not Found Error`,
                500: `Server Error`,
            },
        });
    }

    /**
     * Get count of forums, forum answers, and forum tags
     * @returns ForumCount Count of forums, forum answers, and forum tags
     * @throws ApiError
     */
    public static getApiReportsForumsCount(): CancelablePromise<ForumCount> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/reports/forums/count',
            errors: {
                400: `Validation Error`,
                401: `Unauthorized`,
                404: `Not Found Error`,
                500: `Server Error`,
            },
        });
    }

    /**
     * Get overview of forum questions and answers by month
     * @returns ForumOverview Overview of forum questions and answers by month
     * @throws ApiError
     */
    public static getApiReportsForumsOverview({
year,
}: {
/**
 * The year to filter the overview
 */
year?: string,
}): CancelablePromise<Array<ForumOverview>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/reports/forums/overview',
            query: {
                'year': year,
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
     * Retrieve Common Overview Reports
     * @returns CommonOverviewResponse Successful response
     * @throws ApiError
     */
    public static getApiReportsCommonOverview(): CancelablePromise<CommonOverviewResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/reports/common/overview',
            errors: {
                400: `Validation Error`,
                401: `Unauthorized`,
                404: `Not Found Error`,
                500: `Server Error`,
            },
        });
    }

    /**
     * Retrieve Analytics Overview for Pie Chart
     * @returns AnalyticsOverviewPieChartResponse Successful response
     * @throws ApiError
     */
    public static getApiReportsAnalyticsOverviewPiechart(): CancelablePromise<AnalyticsOverviewPieChartResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/reports/analytics/overview/piechart',
            errors: {
                400: `Validation Error`,
                401: `Unauthorized`,
                404: `Not Found Error`,
                500: `Server Error`,
            },
        });
    }

    /**
     * Retrieve Analytics Overview for User Feedback
     * @returns AnalyticsOverviewUserFeedbackResponse Successful response
     * @throws ApiError
     */
    public static getApiReportsAnalyticsOverviewUserFeedback(): CancelablePromise<AnalyticsOverviewUserFeedbackResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/reports/analytics/overview/user-feedback',
            errors: {
                400: `Validation Error`,
                401: `Unauthorized`,
                404: `Not Found Error`,
                500: `Server Error`,
            },
        });
    }

    /**
     * Get Reported Questions in Forums
     * @returns any Successful response
     * @throws ApiError
     */
    public static getApiForumsReportedQuestions({
search,
page,
perpage,
}: {
/**
 * Search term
 */
search?: string,
/**
 * Page number
 */
page?: string,
/**
 * Number of items per page
 */
perpage?: string,
}): CancelablePromise<{
data?: ReportedQuestionList;
pagination?: PaginationData;
}> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/forums/reported/questions',
            query: {
                'search': search,
                'page': page,
                'perpage': perpage,
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
     * Get Harvest Distribution Analytics
     * @returns HarvestDistribution Successful response
     * @throws ApiError
     */
    public static getApiReportsAnalyticsHarvestDistribution({
month,
limit,
}: {
/**
 * Month for which to retrieve harvest distribution
 */
month: string,
/**
 * Limit the number of results (default is 50)
 */
limit?: string,
}): CancelablePromise<Array<HarvestDistribution>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/reports/analytics/harvest/distribution',
            query: {
                'month': month,
                'limit': limit,
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
     * Get Crop Distribution Analytics
     * @returns CropDistribution Successful response
     * @throws ApiError
     */
    public static getApiReportsAnalyticsCropDistribution({
month,
limit,
}: {
/**
 * Month for which to retrieve crop distribution
 */
month: string,
/**
 * Limit the number of results (default is 50)
 */
limit?: string,
}): CancelablePromise<Array<CropDistribution>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/reports/analytics/crop/distribution',
            query: {
                'month': month,
                'limit': limit,
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
     * Get Crop Distribution Analytics
     * @returns CropDistribution Successful response
     * @throws ApiError
     */
    public static getApiReportsAnalyticsCropDistributionCommunity({
month,
limit,
}: {
/**
 * Month for which to retrieve crop distribution
 */
month: string,
/**
 * Limit the number of results (default is 50)
 */
limit?: string,
}): CancelablePromise<Array<CropDistribution>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/reports/analytics/crop/distribution/community',
            query: {
                'month': month,
                'limit': limit,
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
     * Get Growth Rate Distribution Analytics
     * @returns GrowthRateDistribution Successful response
     * @throws ApiError
     */
    public static getApiReportsAnalyticsGrowthRateDistribution({
month,
limit,
}: {
/**
 * Month for which to retrieve growth rate distribution
 */
month: string,
/**
 * Limit the number of results (default is 50)
 */
limit?: string,
}): CancelablePromise<Array<GrowthRateDistribution>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/reports/analytics/growth-rate/distribution',
            query: {
                'month': month,
                'limit': limit,
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
     * Get Inactive Farm Report
     * @returns InactiveFarmReport Successful response
     * @throws ApiError
     */
    public static getApiReportsFarmInactive({
search,
page,
perpage,
}: {
/**
 * Search term to filter farms
 */
search?: string,
/**
 * Page number for pagination
 */
page?: string,
/**
 * Number of records per page
 */
perpage?: string,
}): CancelablePromise<InactiveFarmReport> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/reports/farm/inactive',
            query: {
                'search': search,
                'page': page,
                'perpage': perpage,
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
     * Get Farm Land Size Analytics by District
     * @returns FarmLandSizeAnalytics Successful response
     * @throws ApiError
     */
    public static getApiReportsFarmLandSizeAnalytics(): CancelablePromise<FarmLandSizeAnalytics> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/reports/farm/land-size/analytics',
            errors: {
                400: `Validation Error`,
                401: `Unauthorized`,
                404: `Not Found Error`,
                500: `Server Error`,
            },
        });
    }

    /**
     * Get Farm Land Size Analytics by District
     * @returns FarmLandSizeByDistrict Successful response
     * @throws ApiError
     */
    public static getApiReportsFarmLandSizeAnalyticsDistrict({
district,
limit = 50,
}: {
/**
 * The district name (e.g., District 1, District 2, etc.)
 */
district?: 'District 1' | 'District 2' | 'District 3' | 'District 4' | 'District 5' | 'District 6',
/**
 * The maximum number of results to return
 */
limit?: number,
}): CancelablePromise<Array<FarmLandSizeByDistrict>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/reports/farm/land-size/analytics/district',
            query: {
                'district': district,
                'limit': limit,
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
     * Get Pre-defined Messages
     * @returns PreDefinedMessages Successful response
     * @throws ApiError
     */
    public static getApiReportsAnalyticsPreDefined(): CancelablePromise<PreDefinedMessages> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/reports/analytics/pre-defined',
            errors: {
                400: `Validation Error`,
                401: `Unauthorized`,
                404: `Not Found Error`,
                500: `Server Error`,
            },
        });
    }

}
