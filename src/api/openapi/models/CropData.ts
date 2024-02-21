/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CropData = {
    /**
     * The ID of the crop
     */
    id?: string;
    /**
     * The name of the crop
     */
    name?: string;
    /**
     * A description of the crop
     */
    description?: string;
    /**
     * The filename of the crop image
     */
    image?: string;
    /**
     * The seedling season of the crop
     */
    seedling_season?: string;
    /**
     * The planting season of the crop
     */
    planting_season?: string;
    /**
     * The harvest season of the crop
     */
    harvest_season?: string;
    p_season?: Array<string>;
    /**
     * Indicates whether the crop yields
     */
    isyield?: boolean;
    /**
     * The growth span of the crop
     */
    growth_span?: string;
    /**
     * The timestamp when the crop was created
     */
    createdat?: string;
    /**
     * The timestamp when the crop was last updated
     */
    updatedat?: string;
};
