/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FarmerAnswer } from './FarmerAnswer';

export type FarmerApplication = {
    /**
     * ID of the membership application
     */
    id?: string;
    /**
     * Date and time of application creation
     */
    createdat?: string;
    /**
     * Date and time of last update
     */
    updatedat?: string;
    /**
     * ID of the user who applied
     */
    userid?: string;
    /**
     * Current status of the application
     */
    status?: string;
    /**
     * URL of the user's avatar
     */
    avatar?: string;
    /**
     * Last name of the user
     */
    lastname?: string;
    /**
     * Username of the user
     */
    username?: string;
    /**
     * Email address of the user
     */
    email?: string;
    /**
     * Present address of the user
     */
    present_address?: string;
    /**
     * District of the user
     */
    district?: string;
    /**
     * List of answers provided by the user
     */
    answers?: Array<FarmerAnswer>;
};
