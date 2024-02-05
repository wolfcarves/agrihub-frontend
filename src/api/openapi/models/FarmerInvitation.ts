/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type FarmerInvitation = {
    /**
     * ID of the invitation
     */
    id: string;
    /**
     * ID of the farm
     */
    farmid: string;
    /**
     * ID of the user being invited
     */
    userid: string;
    /**
     * Expiry date and time of the invitation
     */
    expiresat: string;
    /**
     * Flag indicating whether the invitation is accepted
     */
    isaccepted: boolean;
    /**
     * Date and time of creation
     */
    createdat: string;
    /**
     * Date and time of last update
     */
    updatedat: string;
};
