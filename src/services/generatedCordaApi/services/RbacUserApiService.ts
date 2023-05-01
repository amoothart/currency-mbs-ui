/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateUserType } from '../models/CreateUserType';
import type { UserPermissionSummaryResponseType } from '../models/UserPermissionSummaryResponseType';
import type { UserResponseType } from '../models/UserResponseType';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class RbacUserApiService {

    /**
     * This method returns a user based on the specified login name.
     * @param loginname The login name of the user to be returned
     * @returns UserResponseType
 * A newly created user with the following attributes:
 * id: Unique server generated identifier for the user
 * version: The version of the user; version 0 is assigned to a newly created user
 * updateTimestamp: The date and time when the user was last updated
 * fullName: The full name for the new user
 * loginName: The login name for the new user
 * enabled: If true, the user account is enabled; false, the account is disabled
 * ssoAuth: If true, the user account is enabled for SSO authentication;
 * false, the account is enabled for password authentication
 * passwordExpiry: The date and time when the password should expire, specified as an ISO-8601 string;
 * value of null means that the password does not expire
 * parentGroup: An optional identifier of the user group for the new user to be included;
 * value of null means that the user will belong to the root group
 * properties: An optional set of key/value properties associated with a user account
 * roleAssociations: A set of roles associated with the user account
     * @throws ApiError
     */
    public static getUser(
loginname: string,
): CancelablePromise<UserResponseType> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user',
            query: {
                'loginname': loginname,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * This method creates a new user.
     * @param requestBody requestBody
     * @returns UserResponseType
 * A newly created user with the following attributes:
 * id: Unique server generated identifier for the user
 * version: The version of the user; version 0 is assigned to a newly created user
 * updateTimestamp: The date and time when the user was last updated
 * fullName: The full name for the new user
 * loginName: The login name for the new user
 * enabled: If true, the user account is enabled; false, the account is disabled
 * ssoAuth: If true, the user account is enabled for SSO authentication;
 * false, the account is enabled for password authentication
 * passwordExpiry: The date and time when the password should expire, specified as an ISO-8601 string;
 * value of null means that the password does not expire
 * parentGroup: An optional identifier of the user group for the new user to be included;
 * value of null means that the user will belong to the root group
 * properties: An optional set of key/value properties associated with a user account
 * roleAssociations: A set of roles associated with the user account
     * @throws ApiError
     */
    public static postUser(
requestBody: CreateUserType,
): CancelablePromise<UserResponseType> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user',
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
    public static getUserGetprotocolversion(): CancelablePromise<number> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/getprotocolversion',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * This method returns a summary of the user's permissions.
     * @param loginname The login name of the user
     * @returns UserPermissionSummaryResponseType
 * enabled: If true, the user account is enabled; false, the account is disabled
 * lastUpdateTimestamp: The date and time when the user was last updated
 * loginName: The login name of the user
 * permissions: An array of one or more permissions associated with the user
 * 
     * @throws ApiError
     */
    public static getUserLoginnamePermissionsummary(
loginname: string,
): CancelablePromise<UserPermissionSummaryResponseType> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/{loginname}/permissionsummary',
            path: {
                'loginname': loginname,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * This method assigns a specified role to a specified user.
     * @param loginname The login name of the user
     * @param roleid The ID of the role to assign to the user
     * @returns UserResponseType
 * A newly created user with the following attributes:
 * id: Unique server generated identifier for the user
 * version: The version of the user; version 0 is assigned to a newly created user
 * updateTimestamp: The date and time when the user was last updated
 * fullName: The full name for the new user
 * loginName: The login name for the new user
 * enabled: If true, the user account is enabled; false, the account is disabled
 * ssoAuth: If true, the user account is enabled for SSO authentication;
 * false, the account is enabled for password authentication
 * passwordExpiry: The date and time when the password should expire, specified as an ISO-8601 string;
 * value of null means that the password does not expire
 * parentGroup: An optional identifier of the user group for the new user to be included;
 * value of null means that the user will belong to the root group
 * properties: An optional set of key/value properties associated with a user account
 * roleAssociations: A set of roles associated with the user account
     * @throws ApiError
     */
    public static putUserLoginnameRoleRoleid(
loginname: string,
roleid: string,
): CancelablePromise<UserResponseType> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/user/{loginname}/role/{roleid}',
            path: {
                'loginname': loginname,
                'roleid': roleid,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * This method removes the specified role from the specified user.
     * @param loginname The login name of the user
     * @param roleid The ID of the role to remove from the user
     * @returns UserResponseType
 * A newly created user with the following attributes:
 * id: Unique server generated identifier for the user
 * version: The version of the user; version 0 is assigned to a newly created user
 * updateTimestamp: The date and time when the user was last updated
 * fullName: The full name for the new user
 * loginName: The login name for the new user
 * enabled: If true, the user account is enabled; false, the account is disabled
 * ssoAuth: If true, the user account is enabled for SSO authentication;
 * false, the account is enabled for password authentication
 * passwordExpiry: The date and time when the password should expire, specified as an ISO-8601 string;
 * value of null means that the password does not expire
 * parentGroup: An optional identifier of the user group for the new user to be included;
 * value of null means that the user will belong to the root group
 * properties: An optional set of key/value properties associated with a user account
 * roleAssociations: A set of roles associated with the user account
     * @throws ApiError
     */
    public static deleteUserLoginnameRoleRoleid(
loginname: string,
roleid: string,
): CancelablePromise<UserResponseType> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/user/{loginname}/role/{roleid}',
            path: {
                'loginname': loginname,
                'roleid': roleid,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

}
