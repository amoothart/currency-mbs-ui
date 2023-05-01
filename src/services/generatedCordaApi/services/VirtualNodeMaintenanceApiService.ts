/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CpiUploadResponse } from '../models/CpiUploadResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class VirtualNodeMaintenanceApiService {

    /**
     * Even if CPI with the same metadata has already been uploaded, this endpoint will overwrite the previously stored CPI record. This operation also purges any sandboxes running an overwritten version of a CPI. This action can take some time to process, therefore it is performed asynchronously.
     * @param formData requestBody
     * @returns CpiUploadResponse The response ID which can be used to track the progress of the force CPI upload operation.
     * @throws ApiError
     */
    public static postMaintenanceVirtualnodeForcecpiupload(
formData: {
/**
 * A content of the file to upload.
 */
upload?: Blob;
},
): CancelablePromise<CpiUploadResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/maintenance/virtualnode/forcecpiupload',
            formData: formData,
            mediaType: 'multipart/form-data',
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
    public static getMaintenanceVirtualnodeGetprotocolversion(): CancelablePromise<number> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/maintenance/virtualnode/getprotocolversion',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * Rollback the virtual node database for the given virtual node short ID. Then apply current CPI migrations. This operation is destructive and will result in user vault data being deleted, but will not have any effect on system tables.
     * @param virtualnodeshortid Short ID of the virtual node instance to rollback
     * @returns any A list of the shortIDs or the exception encountered
     * @throws ApiError
     */
    public static postMaintenanceVirtualnodeVirtualnodeshortidVaultSchemaForceResync(
virtualnodeshortid: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/maintenance/virtualnode/{virtualnodeshortid}/vault-schema/force-resync',
            path: {
                'virtualnodeshortid': virtualnodeshortid,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

}
