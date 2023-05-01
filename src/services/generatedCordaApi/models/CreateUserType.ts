/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 *
 * Details of the user to be created with the following parameters:
 * enabled: If true, the user account is enabled; false, the account is disabled
 * fullName: The full name for the new user
 * initialPassword: The initial password for the new user;
 * the value can be null for Single Sign On (SSO) users
 * loginName: The login name for the new user
 * parentGroup: An optional identifier of the user group for the new user to be included;
 * value of null means that the user will belong to the root group
 * passwordExpiry: The date and time when the password should expire, specified as an ISO-8601 string;
 * value of null means that the password does not expire
 */
export type CreateUserType = {
    enabled: boolean;
    fullName: string;
    initialPassword?: string | null;
    loginName: string;
    parentGroup?: string | null;
    passwordExpiry?: string | null;
};
