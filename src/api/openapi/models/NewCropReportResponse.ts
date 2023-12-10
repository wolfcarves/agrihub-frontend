/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type NewCropReportResponse = {
    /**
     * A message indicating the success of the crop report creation
     */
    message?: string;
    data?: {
/**
 * The ID of the crop report
 */
id?: string;
/**
 * The ID of the farm
 */
farmid?: string;
/**
 * The ID of the user
 */
userid?: string;
/**
 * The name of the crop
 */
crop_name?: string;
/**
 * The ID of the crop
 */
crop_id?: string;
/**
 * The quantity of crops planted
 */
planted_qty?: string;
/**
 * The quantity of crops harvested
 */
harvested_qty?: string;
/**
 * The yield of the crop
 */
yield?: string;
/**
 * The quantity of withered crops
 */
withered_crops?: string;
/**
 * The date when the crop was planted
 */
date_planted?: string;
/**
 * The expected date of harvest
 */
expected_harvest?: string;
/**
 * The actual date of harvest
 */
date_harvested?: string;
};
};
