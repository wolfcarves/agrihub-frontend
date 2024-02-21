/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateCropRequest = {
    /**
     * The name of the crop
     */
    name?: string;
    /**
     * A description of the crop
     */
    description?: string;
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
    /**
     * The growth span of the crop
     */
    growth_span?: string;
    /**
     * Indicates whether the crop yields
     */
    isyield?: boolean;
    p_season?: Array<string>;
    /**
     * Binary data of the crop image
     */
    image?: Blob;
};
