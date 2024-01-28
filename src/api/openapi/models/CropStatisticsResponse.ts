/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CropImage } from './CropImage';

export type CropStatisticsResponse = {
    crop_id?: string;
    crop_name?: string;
    description?: string;
    image?: string;
    report_count?: string;
    growth_span?: string;
    seedling_season?: string;
    planting_season?: string;
    harvest_season?: string;
    planted_quantity?: string;
    total_harvested?: string;
    total_withered?: string;
    net_yield?: string;
    crop_yield?: string;
    images?: Array<CropImage>;
};
