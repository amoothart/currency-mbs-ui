/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MemberRegistrationRequest } from '../models/MemberRegistrationRequest';
import type { RegistrationRequestProgress } from '../models/RegistrationRequestProgress';
import type { RestRegistrationRequestStatus } from '../models/RestRegistrationRequestStatus';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class MemberRegistrationApiService {

    /**
     * @returns number An integer value specifying the version of the endpoint
     * @throws ApiError
     */
    public static getMembershipGetprotocolversion(): CancelablePromise<number> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/membership/getprotocolversion',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * This method checks the statuses of all registration requests for a specified holding identity.
     * @param holdingidentityshorthash The ID of the holding identity whose view of the registration progress is to be checked.
     * @returns RestRegistrationRequestStatus
 * The registration status information, including:
 * registrationId: the registration request ID
 * registrationSent: the date and the when the registration progress started;
 * value of null indicated that registration has not started yet
 * registrationUpdated: the date and the when the registration has been last updated
 * registrationStatus: the status of the registration request;
 * possible values are "NEW", "PENDING_MEMBER_VERIFICATION", "PENDING_APPROVAL_FLOW",
 * "PENDING_MANUAL_APPROVAL", "PENDING_AUTO_APPROVAL", "DECLINED", or "APPROVED"
 * memberInfoSubmitted: the properties submitted to MGM during the registration
 * 
     * @throws ApiError
     */
    public static getMembershipHoldingidentityshorthash(
holdingidentityshorthash: string,
): CancelablePromise<Array<RestRegistrationRequestStatus>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/membership/{holdingidentityshorthash}',
            path: {
                'holdingidentityshorthash': holdingidentityshorthash,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * This method starts the registration process for a holding identity.
     * @param holdingidentityshorthash The holding identity ID of the requesting virtual node
     * @param requestBody requestBody
     * @returns RegistrationRequestProgress
 * The registration progress information, including:
 * registrationId: the registration request ID
 * registrationSent: the date and the when the registration progress started;
 * value of null indicated that registration has not started yet
 * registrationStatus: the status of the registration request;
 * possible values are "SUBMITTED and "NOT_SUBMITTED"
 * memberInfoSubmitted: the properties submitted to MGM during the registration
 * 
     * @throws ApiError
     */
    public static postMembershipHoldingidentityshorthash(
holdingidentityshorthash: string,
requestBody: MemberRegistrationRequest,
): CancelablePromise<RegistrationRequestProgress> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/membership/{holdingidentityshorthash}',
            path: {
                'holdingidentityshorthash': holdingidentityshorthash,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * This method checks the status of the specified registration request for a holding identity.
     * @param holdingidentityshorthash The ID of the holding identity whose view of the registration progress is to be checked.
     * @param registrationrequestid The ID of the registration request
     * @returns RestRegistrationRequestStatus
 * The registration status information, including:
 * registrationId: the registration request ID
 * registrationSent: the date and the when the registration progress started;
 * value of null indicated that registration has not started yet
 * registrationUpdated: the date and the when the registration has been last updated
 * registrationStatus: the status of the registration request;
 * possible values are "NEW", "PENDING_MEMBER_VERIFICATION", "PENDING_APPROVAL_FLOW",
 * "PENDING_MANUAL_APPROVAL", "PENDING_AUTO_APPROVAL", "DECLINED", or "APPROVED"
 * memberInfoSubmitted: the properties submitted to MGM during the registration
 * 
     * @throws ApiError
     */
    public static getMembershipHoldingidentityshorthashRegistrationrequestid(
holdingidentityshorthash: string,
registrationrequestid: string,
): CancelablePromise<RestRegistrationRequestStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/membership/{holdingidentityshorthash}/{registrationrequestid}',
            path: {
                'holdingidentityshorthash': holdingidentityshorthash,
                'registrationrequestid': registrationrequestid,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

}
