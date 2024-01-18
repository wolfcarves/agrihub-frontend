/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type NewFarmApplication = {
    /**
     * The name of the farm
     */
    farm_name?: string;
    /**
     * The size of the farm
     */
    farm_size?: string;
    /**
     * The district of the farm
     */
    district?: string;
    /**
     * The type of ID used for application
     */
    id_type?: string;
    /**
     * The selfie image file
     */
    selfie?: Blob;
    /**
     * The proof image file
     */
    valid_id?: Blob;
    /**
     * The proof image file
     */
    proof?: Blob;
    /**
     * An array of actual farm image files
     */
    farm_actual_images?: Array<Blob>;
};
