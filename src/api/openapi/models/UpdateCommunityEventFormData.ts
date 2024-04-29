/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateCommunityEventFormData = {
    title?: string;
    about?: string;
    start_date?: string;
    end_date?: string;
    type?: UpdateCommunityEventFormData.type;
    tags?: (Array<string> | string);
    banner?: Blob;
};

export namespace UpdateCommunityEventFormData {

    export enum type {
        PRIVATE = 'private',
        PUBLIC = 'public',
    }


}
