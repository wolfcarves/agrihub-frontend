/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateCommunityEventFormData = {
    farmid?: string;
    title?: string;
    about?: string;
    start_date?: string;
    end_date?: string;
    type?: CreateCommunityEventFormData.type;
    tags?: (Array<string> | string);
    banner?: Blob;
};

export namespace CreateCommunityEventFormData {

    export enum type {
        PRIVATE = 'private',
        PUBLIC = 'public',
    }


}
