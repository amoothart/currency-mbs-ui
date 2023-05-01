/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FlowStatusResponse } from '../models/FlowStatusResponse';
import type { FlowStatusResponses } from '../models/FlowStatusResponses';
import type { StartFlowParameters } from '../models/StartFlowParameters';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class FlowManagementApiService {

    /**
     * @returns number An integer value specifying the version of the endpoint
     * @throws ApiError
     */
    public static getFlowGetprotocolversion(): CancelablePromise<number> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/flow/getprotocolversion',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * This method returns an array containing the statuses of all flows running for a specified holding identity. An empty array is returned if there are no flows running.
     * @param holdingidentityshorthash The short hash of the holding identity; obtained during node registration
     * @returns FlowStatusResponses
 * A collection of statuses for the flow instances, including:
 *
 * holdingIdentityShortHash: The short form hash of the Holding Identity
 * clientRequestId: The unique ID supplied by the client when the flow was created.
 * flowId: The internal unique ID for the flow.
 * flowStatus: The current state of the executing flow.
 * flowResult: The result returned from a completed flow, only set when the flow status is 'COMPLETED' otherwise null
 * flowError: The details of the error that caused a flow to fail, only set when the flow status is 'FAILED' otherwise null
 * timestamp: The timestamp of when the status was last updated (in UTC)
 * 
     * @throws ApiError
     */
    public static getFlowHoldingidentityshorthash(
holdingidentityshorthash: string,
): CancelablePromise<FlowStatusResponses> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/flow/{holdingidentityshorthash}',
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
     * This method starts a new instance for the specified flow for the specified holding identity.
     * @param holdingidentityshorthash The short hash of the holding identity; obtained during node registration
     * @param requestBody requestBody
     * @returns FlowStatusResponse
 * The initial status of the flow instance; if the flow already exists, then the status of the existing flow will be returned.
 *
 * holdingIdentityShortHash: The short form hash of the holding identity
 * clientRequestId: The unique ID supplied by the client when the flow was created.
 * flowId: The internal unique ID for the flow.
 * flowStatus: The current state of the executing flow.
 * flowResult: The result returned from a completed flow, only set when the flow status is 'COMPLETED' otherwise null
 * flowError: The details of the error that caused a flow to fail, only set when the flow status is 'FAILED' otherwise null
 * timestamp: The timestamp of when the status was last updated (in UTC)
 * 
     * @throws ApiError
     */
    public static postFlowHoldingidentityshorthash(
holdingidentityshorthash: string,
requestBody: StartFlowParameters,
): CancelablePromise<FlowStatusResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/flow/{holdingidentityshorthash}',
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
     * This method gets the current status of the specified flow instance.
     * @param holdingidentityshorthash The short hash of the holding identity; obtained during node registration
     * @param clientrequestid Client provided flow identifier
     * @returns FlowStatusResponse
 * The status of the flow instance, including:
 *
 * holdingIdentityShortHash: The short form hash of the Holding Identity
 * clientRequestId: The unique ID supplied by the client when the flow was created.
 * flowId: The internal unique ID for the flow.
 * flowStatus: The current state of the executing flow.
 * flowResult: The result returned from a completed flow, only set when the flow status is 'COMPLETED' otherwise null
 * flowError: The details of the error that caused a flow to fail, only set when the flow status is 'FAILED' otherwise null
 * timestamp: The timestamp of when the status was last updated (in UTC)
 * 
     * @throws ApiError
     */
    public static getFlowHoldingidentityshorthashClientrequestid(
holdingidentityshorthash: string,
clientrequestid: string,
): CancelablePromise<FlowStatusResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/flow/{holdingidentityshorthash}/{clientrequestid}',
            path: {
                'holdingidentityshorthash': holdingidentityshorthash,
                'clientrequestid': clientrequestid,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

}
