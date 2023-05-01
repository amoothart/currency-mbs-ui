/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MemberInfoSubmitted } from './MemberInfoSubmitted';

export type RegistrationRequestProgress = {
    availableNow: boolean;
    memberInfoSubmitted: MemberInfoSubmitted;
    reason: string;
    registrationId: string;
    registrationSent?: string | null;
    registrationStatus: string;
};
