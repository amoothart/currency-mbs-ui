/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PreAuthToken = {
    creationRemark?: string | null;
    id: string;
    ownerX500Name: string;
    removalRemark?: string | null;
    status: PreAuthToken.status;
    ttl?: string | null;
};

export namespace PreAuthToken {

    export enum status {
        AVAILABLE = 'AVAILABLE',
        REVOKED = 'REVOKED',
        CONSUMED = 'CONSUMED',
        AUTO_INVALIDATED = 'AUTO_INVALIDATED',
    }


}
