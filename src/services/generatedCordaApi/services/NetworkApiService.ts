/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HostedIdentitySetupRequest } from '../models/HostedIdentitySetupRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class NetworkApiService {

    /**
     * @returns number An integer value specifying the version of the endpoint
     * @throws ApiError
     */
    public static getNetworkGetprotocolversion(): CancelablePromise<number> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/network/getprotocolversion',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * This method configures a holding identity as a network participant by setting properties required for P2P messaging.
     * @param holdingidentityshorthash ID of the holding identity to set up
     * @param requestBody requestBody
     * @returns any Success
     * @throws ApiError
     */
    public static putNetworkSetupHoldingidentityshorthash(
holdingidentityshorthash: string,
requestBody: HostedIdentitySetupRequest,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/network/setup/{holdingidentityshorthash}',
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

}
