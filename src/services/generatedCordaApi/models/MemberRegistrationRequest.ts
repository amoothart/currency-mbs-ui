/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * The request sent during registration which contains the requested registration context map containing data required to initiate the registration process.
 */
export type MemberRegistrationRequest = {
    context: Record<string, string>;
};
