/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type VirtualNodeOperationStatus = {
    errors?: string | null;
    heartbeatTimestamp?: string | null;
    latestUpdateTimestamp: string;
    operationData: string;
    requestId: string;
    requestTimestamp: string;
    state: string;
};
