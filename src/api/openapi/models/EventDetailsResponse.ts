/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EventPartnership } from './EventPartnership';
import type { EventSpeaker } from './EventSpeaker';
import type { EventTag } from './EventTag';

export type EventDetailsResponse = {
    id: string;
    banner?: string;
    event_start?: string;
    event_end?: string;
    location?: string;
    title: string;
    about?: string;
    is_archived?: boolean;
    status?: string;
    guide?: string;
    published_date?: string;
    createdat: string;
    updatedat: string;
    partnership?: Array<EventPartnership>;
    speaker?: Array<EventSpeaker>;
    tags?: Array<EventTag>;
};
