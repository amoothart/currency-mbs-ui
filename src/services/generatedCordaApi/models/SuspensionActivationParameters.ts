/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Parameters for suspending or activating a member.
 */
export type SuspensionActivationParameters = {
    reason?: string | null;
    serialNumber?: number | null;
    x500Name: string;
};
