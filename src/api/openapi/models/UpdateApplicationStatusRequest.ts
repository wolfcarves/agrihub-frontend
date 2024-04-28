/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateApplicationStatusRequest = {
    /**
     * New status for the membership application
     */
    status?: UpdateApplicationStatusRequest.status;
    /**
     * Remarks on the application status update
     */
    remarks?: string;
};

export namespace UpdateApplicationStatusRequest {

    /**
     * New status for the membership application
     */
    export enum status {
        REJECTED = 'rejected',
        ACCEPTED = 'accepted',
    }


}
