/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CommunityFarmResponse = {
    /**
     * The ID of the community farm
     */
    id: string;
    /**
     * The name of the community farm
     */
    farm_name: string;
    /**
     * The location of the community farm
     */
    location: string;
    /**
     * The description of the community farm
     */
    description?: string;
    /**
     * The ID of the farm head
     */
    farm_head: string;
    /**
     * The district of the community farm
     */
    district: string;
    /**
     * The size of the community farm
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
     * The ID of the farm's application
     */
    application_id: string;
    /**
     * The timestamp when the community farm was created
     */
    createdat: string;
    /**
     * The timestamp when the community farm was last updated
     */
    updatedat: string;
};
