/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RestMemberInfoList } from '../models/RestMemberInfoList';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class MemberLookupApiService {

    /**
     * @returns number An integer value specifying the version of the endpoint
     * @throws ApiError
     */
    public static getMembersGetprotocolversion(): CancelablePromise<number> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/members/getprotocolversion',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * This method retrieves a list of all active and pending members in the membership group.
     * @param holdingidentityshorthash Holding identity ID of the requesting member. The result only contains members that are visible to this member
     * @param cn Common Name (CN) attribute of the X.500 name to filter members by
     * @param o Organization (O) attribute of the X.500 name to filter members by
     * @param ou Organization Unit (OU) attribute of the X.500 name to filter members by
     * @param l Locality (L) attribute of the X.500 name to filter members by
     * @param st State (ST) attribute of the X.500 name to filter members by
     * @param c Country (C) attribute of the X.500 name to filter members by
     * @returns RestMemberInfoList Success
     * @throws ApiError
     */
    public static getMembersHoldingidentityshorthash(
holdingidentityshorthash: string,
cn?: string | null,
o?: string | null,
ou?: string | null,
l?: string | null,
st?: string | null,
c?: string | null,
): CancelablePromise<RestMemberInfoList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/members/{holdingidentityshorthash}',
            path: {
                'holdingidentityshorthash': holdingidentityshorthash,
            },
            query: {
                'cn': cn,
                'o': o,
                'ou': ou,
                'l': l,
                'st': st,
                'c': c,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * This method retrieves the group parameters of the membership group.
     * @param holdingidentityshorthash Holding identity ID of the requesting member. The result contains group parameters visible to this member.
     * @returns string The group parameters of the membership group as a map
     * @throws ApiError
     */
    public static getMembersHoldingidentityshorthashGroupParameters(
holdingidentityshorthash: string,
): CancelablePromise<Record<string, string>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/members/{holdingidentityshorthash}/group-parameters',
            path: {
                'holdingidentityshorthash': holdingidentityshorthash,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

}
