/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApprovalRuleInfo } from '../models/ApprovalRuleInfo';
import type { ApprovalRuleRequestParams } from '../models/ApprovalRuleRequestParams';
import type { PreAuthToken } from '../models/PreAuthToken';
import type { PreAuthTokenRequest } from '../models/PreAuthTokenRequest';
import type { RestRegistrationRequestStatus } from '../models/RestRegistrationRequestStatus';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class MgmApiService {

    /**
     * @returns number An integer value specifying the version of the endpoint
     * @throws ApiError
     */
    public static getMgmGetprotocolversion(): CancelablePromise<number> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/mgm/getprotocolversion',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * This API retrieves the set of rules the group is currently configured with
     * @param holdingidentityshorthash The holding identity ID of the MGM of the membership group
     * @returns ApprovalRuleInfo Collection of group approval rules
     * @throws ApiError
     */
    public static getMgmHoldingidentityshorthashApprovalRules(
holdingidentityshorthash: string,
): CancelablePromise<Array<ApprovalRuleInfo>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/mgm/{holdingidentityshorthash}/approval/rules',
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
     * This API adds a rule to the set of group approval rules.
     * @param holdingidentityshorthash The holding identity ID of the MGM of the membership group
     * @param requestBody requestBody
     * @returns ApprovalRuleInfo Details of the newly persisted approval rule
     * @throws ApiError
     */
    public static postMgmHoldingidentityshorthashApprovalRules(
holdingidentityshorthash: string,
requestBody: ApprovalRuleRequestParams,
): CancelablePromise<ApprovalRuleInfo> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/mgm/{holdingidentityshorthash}/approval/rules',
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
     * This API retrieves the set of rules the group is currently configured with for registration request with a pre-auth token.
     * @param holdingidentityshorthash The holding identity ID of the MGM.
     * @returns ApprovalRuleInfo A collection of group approval rules.
     * @throws ApiError
     */
    public static getMgmHoldingidentityshorthashApprovalRulesPreauth(
holdingidentityshorthash: string,
): CancelablePromise<Array<ApprovalRuleInfo>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/mgm/{holdingidentityshorthash}/approval/rules/preauth',
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
     * This API adds a rule to the set of group approval rules for registrations including a pre-auth token.
     * @param holdingidentityshorthash The holding identity ID of the MGM.
     * @param requestBody requestBody
     * @returns ApprovalRuleInfo Details of the newly persisted approval rule.
     * @throws ApiError
     */
    public static postMgmHoldingidentityshorthashApprovalRulesPreauth(
holdingidentityshorthash: string,
requestBody: ApprovalRuleRequestParams,
): CancelablePromise<ApprovalRuleInfo> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/mgm/{holdingidentityshorthash}/approval/rules/preauth',
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
     * This API deletes a group approval rule for registrations including a pre-auth token.
     * @param holdingidentityshorthash The holding identity ID of the MGM.
     * @param ruleid The ID of the group approval rule to be deleted.
     * @returns any Success
     * @throws ApiError
     */
    public static deleteMgmHoldingidentityshorthashApprovalRulesPreauthRuleid(
holdingidentityshorthash: string,
ruleid: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/mgm/{holdingidentityshorthash}/approval/rules/preauth/{ruleid}',
            path: {
                'holdingidentityshorthash': holdingidentityshorthash,
                'ruleid': ruleid,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * This API deletes a previously added group approval rule.
     * @param holdingidentityshorthash The holding identity ID of the MGM of the membership group
     * @param ruleid The ID of the group approval rule to be deleted
     * @returns any Success
     * @throws ApiError
     */
    public static deleteMgmHoldingidentityshorthashApprovalRulesRuleid(
holdingidentityshorthash: string,
ruleid: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/mgm/{holdingidentityshorthash}/approval/rules/{ruleid}',
            path: {
                'holdingidentityshorthash': holdingidentityshorthash,
                'ruleid': ruleid,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * @param holdingidentityshorthash The holding identity ID of the MGM of the membership group
     * @param requestid ID of the registration request
     * @returns any Success
     * @throws ApiError
     */
    public static postMgmHoldingidentityshorthashApproveRequestid(
holdingidentityshorthash: string,
requestid: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/mgm/{holdingidentityshorthash}/approve/{requestid}',
            path: {
                'holdingidentityshorthash': holdingidentityshorthash,
                'requestid': requestid,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * @param holdingidentityshorthash The holding identity ID of the MGM of the membership group
     * @param requestid ID of the registration request
     * @param requestBody requestBody
     * @returns any Success
     * @throws ApiError
     */
    public static postMgmHoldingidentityshorthashDeclineRequestid(
holdingidentityshorthash: string,
requestid: string,
requestBody: {
/**
 * Reason for declining the specified registration request
 */
reason?: string;
},
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/mgm/{holdingidentityshorthash}/decline/{requestid}',
            path: {
                'holdingidentityshorthash': holdingidentityshorthash,
                'requestid': requestid,
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
     * This API retrieves the group policy from the MGM required to join the membership group.
     * @param holdingidentityshorthash The holding identity ID of the MGM of the membership group to be joined
     * @returns string The group policy from the MGM required to join the membership group as a string in JSON format
     * @throws ApiError
     */
    public static getMgmHoldingidentityshorthashInfo(
holdingidentityshorthash: string,
): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/mgm/{holdingidentityshorthash}/info',
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
     * This API list the allowed  client certificates subjects to be used in mutual TLS connections.
     * @param holdingidentityshorthash The holding identity ID of the MGM.
     * @returns string List of the allowed client certificate subjects
     * @throws ApiError
     */
    public static getMgmHoldingidentityshorthashMutualTlsAllowedClientCertificateSubjects(
holdingidentityshorthash: string,
): CancelablePromise<Array<string>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/mgm/{holdingidentityshorthash}/mutual-tls/allowed-client-certificate-subjects',
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
     * This API allows a client certificate with a given subject to be used in mutual TLS connections.
     * @param holdingidentityshorthash The holding identity ID of the MGM.
     * @param subject The certificate subject.
     * @returns any Success
     * @throws ApiError
     */
    public static putMgmHoldingidentityshorthashMutualTlsAllowedClientCertificateSubjectsSubject(
holdingidentityshorthash: string,
subject: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/mgm/{holdingidentityshorthash}/mutual-tls/allowed-client-certificate-subjects/{subject}',
            path: {
                'holdingidentityshorthash': holdingidentityshorthash,
                'subject': subject,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * This API disallows a client certificate with a given subject to be used in mutual TLS connections.
     * @param holdingidentityshorthash The holding identity ID of the MGM.
     * @param subject The certificate subject.
     * @returns any Success
     * @throws ApiError
     */
    public static deleteMgmHoldingidentityshorthashMutualTlsAllowedClientCertificateSubjectsSubject(
holdingidentityshorthash: string,
subject: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/mgm/{holdingidentityshorthash}/mutual-tls/allowed-client-certificate-subjects/{subject}',
            path: {
                'holdingidentityshorthash': holdingidentityshorthash,
                'subject': subject,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * @param holdingidentityshorthash 
     * @param ownerx500Name 
     * @param preauthtokenid 
     * @param viewinactive 
     * @returns PreAuthToken Success
     * @throws ApiError
     */
    public static getMgmHoldingidentityshorthashPreauthtoken(
holdingidentityshorthash: string,
ownerx500Name?: string | null,
preauthtokenid?: string | null,
viewinactive?: boolean,
): CancelablePromise<Array<PreAuthToken>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/mgm/{holdingidentityshorthash}/preauthtoken',
            path: {
                'holdingidentityshorthash': holdingidentityshorthash,
            },
            query: {
                'ownerx500name': ownerx500Name,
                'preauthtokenid': preauthtokenid,
                'viewinactive': viewinactive,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * @param holdingidentityshorthash 
     * @param requestBody requestBody
     * @returns PreAuthToken Success
     * @throws ApiError
     */
    public static postMgmHoldingidentityshorthashPreauthtoken(
holdingidentityshorthash: string,
requestBody: PreAuthTokenRequest,
): CancelablePromise<PreAuthToken> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/mgm/{holdingidentityshorthash}/preauthtoken',
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
     * @param holdingidentityshorthash 
     * @param preauthtokenid 
     * @param requestBody requestBody
     * @returns PreAuthToken Success
     * @throws ApiError
     */
    public static putMgmHoldingidentityshorthashPreauthtokenRevokePreauthtokenid(
holdingidentityshorthash: string,
preauthtokenid: string,
requestBody?: {
remarks?: string | null;
},
): CancelablePromise<PreAuthToken> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/mgm/{holdingidentityshorthash}/preauthtoken/revoke/{preauthtokenid}',
            path: {
                'holdingidentityshorthash': holdingidentityshorthash,
                'preauthtokenid': preauthtokenid,
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
     * @param holdingidentityshorthash The holding identity ID of the MGM of the membership group
     * @param requestsubjectx500Name X.500 name of the requesting member
     * @param viewhistoric Include completed (historic) requests if set to 'true'
     * @returns RestRegistrationRequestStatus Success
     * @throws ApiError
     */
    public static getMgmHoldingidentityshorthashRegistrations(
holdingidentityshorthash: string,
requestsubjectx500Name?: string | null,
viewhistoric?: boolean,
): CancelablePromise<Array<RestRegistrationRequestStatus>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/mgm/{holdingidentityshorthash}/registrations',
            path: {
                'holdingidentityshorthash': holdingidentityshorthash,
            },
            query: {
                'requestsubjectx500name': requestsubjectx500Name,
                'viewhistoric': viewhistoric,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

}
