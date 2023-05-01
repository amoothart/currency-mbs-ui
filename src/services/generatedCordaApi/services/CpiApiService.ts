/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CpiUploadResponse } from '../models/CpiUploadResponse';
import type { CpiUploadStatus } from '../models/CpiUploadStatus';
import type { GetCPIsResponse } from '../models/GetCPIsResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CpiApiService {

    /**
     * The GET method returns a list of all CPIs uploaded to the cluster.
     * @returns GetCPIsResponse Details of all of the CPIs uploaded to the cluster.
     * @throws ApiError
     */
    public static getCpi(): CancelablePromise<GetCPIsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/cpi',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * This method uses the POST method to upload a Corda Package Installer (CPI) file to the Corda cluster.
     * @param formData requestBody
     * @returns CpiUploadResponse The ID for the CPI upload request
     * @throws ApiError
     */
    public static postCpi(
formData: {
/**
 * The CPI file to be uploaded.
 */
upload?: Blob;
},
): CancelablePromise<CpiUploadResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/cpi',
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
    public static getCpiGetprotocolversion(): CancelablePromise<number> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/cpi/getprotocolversion',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * The status endpoint uses the GET method to return status information for the CPI upload with the given request ID.
     * @param id The ID returned from the CPI upload request.
     * @returns CpiUploadStatus Success
     * @throws ApiError
     */
    public static getCpiStatusId(
id: string,
): CancelablePromise<CpiUploadStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/cpi/status/{id}',
            path: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

}
