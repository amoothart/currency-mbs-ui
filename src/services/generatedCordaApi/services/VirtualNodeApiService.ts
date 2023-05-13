/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AsyncOperationStatus } from '../models/AsyncOperationStatus';
import type { AsyncResponse } from '../models/AsyncResponse';
import type { ChangeVirtualNodeStateResponse } from '../models/ChangeVirtualNodeStateResponse';
import type { CreateVirtualNodeRequest } from '../models/CreateVirtualNodeRequest';
import type { VirtualNodeInfo } from '../models/VirtualNodeInfo';
import type { VirtualNodes } from '../models/VirtualNodes';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class VirtualNodeApiService {

    /**
     * This method lists all virtual nodes in the cluster.
     * @returns VirtualNodes List of virtual node details.
     * @throws ApiError
     */
    public static getVirtualnode(): CancelablePromise<VirtualNodes> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/virtualnode',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * This method creates a new virtual node.
     * @param requestBody requestBody
     * @returns AsyncResponse The details of the created virtual node.
     * @throws ApiError
     */
    public static postVirtualnode(
requestBody: CreateVirtualNodeRequest,
): CancelablePromise<AsyncResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/virtualnode',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * @returns number An integer value specifying the version of the endpoint
     * @throws ApiError
     */
    public static getVirtualnodeGetprotocolversion(): CancelablePromise<number> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/virtualnode/getprotocolversion',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * This method returns the VirtualNodeOperationStatus for a given operation request id.
     * @param requestid The requestId for the operation; obtained during node creation/upgrade
     * @returns AsyncOperationStatus VirtualNodeOperationStatus for the specified virtual node.
     * @throws ApiError
     */
    public static getVirtualnodeStatusRequestid(
requestid: string,
): CancelablePromise<AsyncOperationStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/virtualnode/status/{requestid}',
            path: {
                'requestid': requestid,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * This method returns the VirtualNodeInfo for a given Holding Identity ShortHash.
     * @param holdingidentityshorthash The short hash of the holding identity; obtained during node registration
     * @returns VirtualNodeInfo VirtualNodeInfo for the specified virtual node.
     * @throws ApiError
     */
    public static getVirtualnodeHoldingidentityshorthash(
holdingidentityshorthash: string,
): CancelablePromise<VirtualNodeInfo> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/virtualnode/{holdingidentityshorthash}',
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
     * This method upgrades a virtual node's CPI.
     * @param virtualnodeshortid Short ID of the virtual node instance to update
     * @param targetcpifilechecksum The file checksum of the CPI to upgrade to.
     * @returns AsyncResponse Identifier for the request.
     * @throws ApiError
     */
    public static putVirtualnodeVirtualnodeshortidCpiTargetcpifilechecksum(
virtualnodeshortid: string,
targetcpifilechecksum: string,
): CancelablePromise<AsyncResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/virtualnode/{virtualnodeshortid}/cpi/{targetcpifilechecksum}',
            path: {
                'virtualnodeshortid': virtualnodeshortid,
                'targetcpifilechecksum': targetcpifilechecksum,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * This method updates the state of a new virtual node to one of the pre-defined values.
     * @param virtualnodeshortid Short ID of the virtual node instance to update
     * @param newstate State to transition virtual node instance into. Possible values are: MAINTENANCE and ACTIVE.
     * @returns ChangeVirtualNodeStateResponse Complete information about updated virtual node which will also contain the updated state.
     * @throws ApiError
     */
    public static putVirtualnodeVirtualnodeshortidStateNewstate(
virtualnodeshortid: string,
newstate: string,
): CancelablePromise<ChangeVirtualNodeStateResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/virtualnode/{virtualnodeshortid}/state/{newstate}',
            path: {
                'virtualnodeshortid': virtualnodeshortid,
                'newstate': newstate,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

}
