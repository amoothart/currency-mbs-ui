/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GetConfigResponse } from '../models/GetConfigResponse';
import type { UpdateConfigParameters } from '../models/UpdateConfigParameters';
import type { UpdateConfigResponse } from '../models/UpdateConfigResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ConfigurationApiService {

    /**
     * This method updates a section of the cluster configuration.
     * @param requestBody requestBody
     * @returns UpdateConfigResponse
 * The updated cluster configuration for the specified section:
 * - `section`: the section of the configuration to be updated.
 * - `config`: the updated configuration in JSON or HOCON format.
 * - `schemaVersion`: the schema version of the configuration.
 * - `version`: the version number used for optimistic locking. The request fails if this version does not
 * match the version stored in the database for the corresponding section or -1 if this is a new section
 * for which no configuration has yet been stored.
     * @throws ApiError
     */
    public static putConfig(
requestBody: UpdateConfigParameters,
): CancelablePromise<UpdateConfigResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/config',
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
    public static getConfigGetprotocolversion(): CancelablePromise<number> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/config/getprotocolversion',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * This method returns the 'active' configuration for the given section, in both the 'raw' format and with defaults applied.
     * @param section Section name for the configuration.
     * @returns GetConfigResponse The configuration for the given section
     * @throws ApiError
     */
    public static getConfigSection(
section: string,
): CancelablePromise<GetConfigResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/config/{section}',
            path: {
                'section': section,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

}
