/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type FarmMemberApplication = {
    /**
     * Name of the contact person applying for membership
     */
    contact_person?: string;
    /**
     * Reason for applying for membership
     */
    reason?: string;
    /**
     * Stringified answer object requested by the frontend.
     */
    answer?: string;
    /**
     * Selfie image of the applicant with id
     */
    proof_selfie?: Blob;
    /**
     * Valid ID image of the applicant
     */
    valid_id?: Blob;
};
