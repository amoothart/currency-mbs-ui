/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateRoleType } from '../models/CreateRoleType';
import type { RoleResponseType } from '../models/RoleResponseType';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class RbacRoleApiService {

    /**
     * This method returns an array with information about all roles in the permission system.
     * @returns RoleResponseType
 * Set of roles with each role having the following attributes:
 * id: The unique identifier of the role
 * version: The version number of the role
 * updateTimestamp: The date and time when the role was last updated
 * roleName: The name of the role
 * groupVisibility: An optional group visibility of the role
 * permissions: The list of permissions associated with the role
 * 
     * @throws ApiError
     */
    public static getRole(): CancelablePromise<Array<RoleResponseType>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/role',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * The method creates a new role in the RBAC permission system.
     * @param requestBody requestBody
     * @returns RoleResponseType
 * Newly created role with attributes:
 * id: The unique identifier of the role
 * version: The version number of the role
 * updateTimestamp: The date and time when the role was last updated
 * roleName: The name of the role
 * groupVisibility: An optional group visibility of the role
 * permissions: The list of permissions associated with the role
     * @throws ApiError
     */
    public static postRole(
requestBody: CreateRoleType,
): CancelablePromise<RoleResponseType> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/role',
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
    public static getRoleGetprotocolversion(): CancelablePromise<number> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/role/getprotocolversion',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * This method gets the details of a role specified by its ID.
     * @param id ID of the role to be returned.
     * @returns RoleResponseType
 * Role with attributes:
 * id: The unique identifier of the role
 * version: The version number of the role
 * updateTimestamp: The date and time when the role was last updated
 * roleName: The name of the role
 * groupVisibility: An optional group visibility of the role
 * permissions: The list of permissions associated with the role
     * @throws ApiError
     */
    public static getRoleId(
id: string,
): CancelablePromise<RoleResponseType> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/role/{id}',
            path: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * This method adds the specified permission to the specified role.
     * @param roleid Identifier for an existing role
     * @param permissionid Identifier for an existing permission
     * @returns RoleResponseType
 * Role with attributes:
 * id: The unique identifier of the role
 * version: The version number of the role
 * updateTimestamp: The date and time when the role was last updated
 * roleName: The name of the role
 * groupVisibility: An optional group visibility of the role
 * permissions: The list of permissions associated with the role
     * @throws ApiError
     */
    public static putRoleRoleidPermissionPermissionid(
roleid: string,
permissionid: string,
): CancelablePromise<RoleResponseType> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/role/{roleid}/permission/{permissionid}',
            path: {
                'roleid': roleid,
                'permissionid': permissionid,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * This method removes the specified permission from the specified role.
     * @param roleid Identifier for an existing role
     * @param permissionid Identifier for an existing permission
     * @returns RoleResponseType
 * Role with attributes:
 * id: The unique identifier of the role
 * version: The version number of the role
 * updateTimestamp: The date and time when the role was last updated
 * roleName: The name of the role
 * groupVisibility: An optional group visibility of the role
 * permissions: The list of permissions associated with the role
     * @throws ApiError
     */
    public static deleteRoleRoleidPermissionPermissionid(
roleid: string,
permissionid: string,
): CancelablePromise<RoleResponseType> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/role/{roleid}/permission/{permissionid}',
            path: {
                'roleid': roleid,
                'permissionid': permissionid,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

}
