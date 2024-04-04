/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateToolRequestStatus = {
    client_note?: string;
    accepted_by?: Array<string>;
    forwarded_to?: Array<string>;
    status: UpdateToolRequestStatus.status;
};

export namespace UpdateToolRequestStatus {

    export enum status {
        PENDING = 'pending',
        ACCEPTED = 'accepted',
        COMMUNICATING = 'communicating',
        REJECTED = 'rejected',
        COMPLETED = 'completed',
        FORWARDED = 'forwarded',
    }


}
