/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type NewCropReportRequest = {
    /**
     * The name of the crop
     */
    crop_name?: string;
    /**
     * The ID of the crop (required)
     */
    crop_id?: string;
    /**
     * The quantity of crops planted (required)
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
     * The date when the crop was planted (required)
     */
    date_planted?: string;
    /**
     * The expected date of harvest (required)
     */
    expected_harvest?: string;
    /**
     * The actual date of harvest (required)
     */
    date_harvested?: string;
    /**
     * Additional notes for the crop report (required)
     */
    notes?: string;
};
