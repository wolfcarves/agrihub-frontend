/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CropItem = {
    /**
     * The ID of the crop
     */
    id: string;
    /**
     * The timestamp when the crop was last updated
     */
    updatedat: string;
    /**
     * The timestamp when the crop was created
     */
    createdat: string;
    /**
     * The name of the crop
     */
    name: string;
    /**
     * The description of the crop
     */
    description: string;
    /**
     * The URL of the crop's image
     */
    image: string;
    /**
     * The seedling season of the crop
     */
    seedling_season: string;
    /**
     * The planting season of the crop
     */
    planting_season: string;
    /**
     * The harvest season of the crop
     */
    harvest_season: string;
    /**
     * Indicates whether the crop is a yield
     */
    isyield: boolean;
    /**
     * The growth span of the crop
     */
    growth_span: string;
};
