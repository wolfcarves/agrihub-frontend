/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ListCommunityEvents = {
    query?: {
search?: string;
page?: string;
perpage?: string;
type?: ListCommunityEvents.type;
};
};

export namespace ListCommunityEvents {

    export enum type {
        PRIVATE = 'private',
        PUBLIC = 'public',
    }


}
