/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MemberInfoSubmitted } from './MemberInfoSubmitted';

export type RestRegistrationRequestStatus = {
    memberInfoSubmitted: MemberInfoSubmitted;
    reason?: string | null;
    registrationId: string;
    registrationSent?: string | null;
    registrationStatus: RestRegistrationRequestStatus.registrationStatus;
    registrationUpdated?: string | null;
    serial?: number | null;
};

export namespace RestRegistrationRequestStatus {

    export enum registrationStatus {
        NEW = 'NEW',
        SENT_TO_MGM = 'SENT_TO_MGM',
        RECEIVED_BY_MGM = 'RECEIVED_BY_MGM',
        PENDING_MEMBER_VERIFICATION = 'PENDING_MEMBER_VERIFICATION',
        PENDING_MANUAL_APPROVAL = 'PENDING_MANUAL_APPROVAL',
        PENDING_AUTO_APPROVAL = 'PENDING_AUTO_APPROVAL',
        DECLINED = 'DECLINED',
        INVALID = 'INVALID',
        FAILED = 'FAILED',
        APPROVED = 'APPROVED',
    }


}
