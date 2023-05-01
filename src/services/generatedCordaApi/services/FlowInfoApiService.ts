/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { StartableFlowsResponse } from '../models/StartableFlowsResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class FlowInfoApiService {

    /**
     * @returns number An integer value specifying the version of the endpoint
     * @throws ApiError
     */
    public static getFlowclassGetprotocolversion(): CancelablePromise<number> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/flowclass/getprotocolversion',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * This method gets all flows that can be used by the specified holding identity.
     * @param holdingidentityshorthash The short hash of the holding identity; this is obtained during node registration
     * @returns StartableFlowsResponse The class names of all flows that can be run
     * @throws ApiError
     */
    public static getFlowclassHoldingidentityshorthash(
holdingidentityshorthash: string,
): CancelablePromise<StartableFlowsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/flowclass/{holdingidentityshorthash}',
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
