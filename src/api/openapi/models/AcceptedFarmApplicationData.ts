/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AcceptedFarmApplicationData = {
    /**
     * The ID of the accepted farm application
     */
    id: string;
    /**
     * The name of the farm
     */
    farm_name: string;
    /**
     * The location of the farm
     */
    location: string;
    /**
     * The description of the farm
     */
    description?: string;
    /**
     * The ID of the farm head
     */
    farm_head: string;
    /**
     * The district of the farm
     */
    district: string;
    /**
     * The size of the farm
     */
    size: string;
    /**
     * The URL of the farm's avatar
     */
    avatar?: string;
    /**
     * The URL of the farm's cover photo
     */
    cover_photo?: string;
    /**
     * The ID of the associated farm application
     */
    application_id: string;
    /**
     * The timestamp when the farm was created
     */
    createdat: string;
    /**
     * The timestamp when the farm was last updated
     */
    updatedat: string;
};
