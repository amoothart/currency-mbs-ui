/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BulkCreatePermissionsRequestType } from '../models/BulkCreatePermissionsRequestType';
import type { BulkCreatePermissionsResponseType } from '../models/BulkCreatePermissionsResponseType';
import type { CreatePermissionType } from '../models/CreatePermissionType';
import type { PermissionResponseType } from '../models/PermissionResponseType';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class RbacPermissionApiService {

    /**
     * This method returns permissions which satisfy supplied query criteria.
     * @param limit The maximum number of results to return. The value must be in the range [1..1000].
     * @param permissiontype The permission type to be returned.
     * @param groupvisibility Optional group visibility for a permission.
     * @param virtualnode Optional virtual node the permissions apply to.
     * @param permissionstringprefix Optional permission string prefix for permissions to be located.
     * @returns PermissionResponseType Permissions which satisfy supplied query criteria
     * @throws ApiError
     */
    public static getPermission(
limit: number,
permissiontype: string,
groupvisibility?: string | null,
virtualnode?: string | null,
permissionstringprefix?: string | null,
): CancelablePromise<Array<PermissionResponseType>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/permission',
            query: {
                'limit': limit,
                'permissiontype': permissiontype,
                'groupvisibility': groupvisibility,
                'virtualnode': virtualnode,
                'permissionstringprefix': permissionstringprefix,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * This method creates a new permission.
     * @param requestBody requestBody
     * @returns PermissionResponseType
 * id: The server-side generated ID of the new permission
 * permissionType: Defines whether this is an ALLOW or DENY type of permission
 * permissionString: A machine-parseable string representing an individual permission;
 * it can be any arbitrary string as long as the authorization code can make use of it in the context of user
 * permission matching
 * groupVisibility: An optional group visibility identifier of the permission
 * virtualNode: An optional identifier of the virtual node to which the physical node permission applies
 * version: The version number of the permission; a value of 0 is assigned to a newly-created permission
 * updateTimestamp: The server-side timestamp showing when the permission was created
 * 
     * @throws ApiError
     */
    public static postPermission(
requestBody: CreatePermissionType,
): CancelablePromise<PermissionResponseType> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/permission',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * This method creates a set of permissions and optionally assigns them to the existing roles.
     * @param requestBody requestBody
     * @returns BulkCreatePermissionsResponseType A set of identifiers for permissions created along with role identifiers they were associated with.
     * @throws ApiError
     */
    public static postPermissionBulk(
requestBody: BulkCreatePermissionsRequestType,
): CancelablePromise<BulkCreatePermissionsResponseType> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/permission/bulk',
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
    public static getPermissionGetprotocolversion(): CancelablePromise<number> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/permission/getprotocolversion',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * This method returns the permission associated with the specified ID.
     * @param id ID of the permission to be returned.
     * @returns PermissionResponseType
 * id: The server-side generated ID of the new permission
 * permissionType: Defines whether this is an ALLOW or DENY type of permission
 * permissionString: A machine-parseable string representing an individual permission;
 * it can be any arbitrary string as long as the authorization code can make use of it in the context of user
 * permission matching
 * groupVisibility: An optional group visibility identifier of the permission
 * virtualNode: An optional identifier of the virtual node to which the physical node permission applies
 * version: The version number of the permission; a value of 0 is assigned to a newly-created permission
 * updateTimestamp: The server-side timestamp showing when the permission was created
     * @throws ApiError
     */
    public static getPermissionId(
id: string,
): CancelablePromise<PermissionResponseType> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/permission/{id}',
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
