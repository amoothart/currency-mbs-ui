/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AsyncOperationStatus = {
    errorReason?: string | null;
    lastUpdatedTimestamp: string;
    operation: string;
    processingStage?: string | null;
    requestId: string;
    resourceId?: string | null;
    status: AsyncOperationStatus.status;
};

export namespace AsyncOperationStatus {

    export enum status {
        ACCEPTED = 'ACCEPTED',
        IN_PROGRESS = 'IN_PROGRESS',
        SUCCEEDED = 'SUCCEEDED',
        FAILED = 'FAILED',
        ABORTED = 'ABORTED',
    }


}
