/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EventTag } from './EventTag';

export type CommunityEvent = {
    id?: string;
    farmid?: string;
    title?: string;
    about?: string;
    banner?: string;
    start_date?: string;
    end_date?: string;
    type?: CommunityEvent.type;
    createdat?: string;
    updatedat?: string;
    farm_name?: string;
    going?: string;
    interested?: string;
    tags?: Array<EventTag>;
    action?: {
id?: string;
type?: string;
};
};

export namespace CommunityEvent {

    export enum type {
        PRIVATE = 'private',
        PUBLIC = 'public',
    }


}
