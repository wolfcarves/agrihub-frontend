/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CropReport = {
    /**
     * The ID of the crop report
     */
    id?: string;
    /**
     * The ID of the farm to which the crop report belongs
     */
    farmid?: string;
    /**
     * The ID of the user who created the crop report
     */
    userid?: string;
    /**
     * An array of actual farm image files
     */
    p_season?: Array<string>;
    /**
     * The name of the crop (null if not set)
     */
    crop_name?: string;
    /**
     * The ID of the crop associated with the report
     */
    crop_id?: string;
    /**
     * The quantity of crops planted
     */
    planted_qty?: string;
    /**
     * The quantity of crops harvested (null if not set)
     */
    harvested_qty?: string;
    /**
     * The yield of the crop (null if not set)
     */
    yield?: string;
    /**
     * The quantity of withered crops (null if not set)
     */
    withered_crops?: string;
    /**
     * The timestamp when the crops were planted
     */
    date_planted?: string;
    /**
     * The expected timestamp for harvest
     */
    expected_harvest?: string;
    /**
     * The timestamp when the crops were harvested (null if not set)
     */
    date_harvested?: string;
    /**
     * The URL of the image associated with the crop report (null if not set)
     */
    image?: string;
    /**
     * Indicates whether the crops have been harvested
     */
    isharvested?: boolean;
    /**
     * The timestamp when the crop report was created
     */
    createdat?: string;
    /**
     * The timestamp when the crop report was last updated
     */
    updatedat?: string;
    /**
     * Additional notes related to the crop report
     */
    notes?: string;
};
