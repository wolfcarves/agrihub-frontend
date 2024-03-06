/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Member } from './Member';
import type { Partner } from './Partner';
import type { Social } from './Social';

export type ClientDetailsResponse = {
    id?: string;
    name?: string;
    logo?: string;
    email?: string;
    contact_number?: string;
    address?: string;
    mission?: string;
    vision?: string;
    createdat?: string;
    updatedat?: string;
    socials?: Array<Social>;
    partners?: Array<Partner>;
    members?: Array<Member>;
};
