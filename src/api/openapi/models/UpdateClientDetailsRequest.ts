/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MemberUpdate } from './MemberUpdate';
import type { PartnerUpdate } from './PartnerUpdate';
import type { SocialUpdate } from './SocialUpdate';

export type UpdateClientDetailsRequest = {
    name?: string;
    logo?: string;
    email?: string;
    contact_number?: string;
    address?: string;
    mission?: string;
    vision?: string;
    socials?: Array<SocialUpdate>;
    partners?: Array<PartnerUpdate>;
    members?: Array<MemberUpdate>;
};
