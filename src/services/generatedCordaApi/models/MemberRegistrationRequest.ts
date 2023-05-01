/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * The request sent during registration which contains the requested registration action (e.g. 'requestJoin') along with a context map containing data required to initiate the registration process.
 */
export type MemberRegistrationRequest = {
    action: string;
    context: Record<string, string>;
};
