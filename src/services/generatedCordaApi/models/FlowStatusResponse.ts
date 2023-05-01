/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FlowStateErrorResponse } from './FlowStateErrorResponse';

export type FlowStatusResponse = {
    clientRequestId?: string | null;
    flowError?: FlowStateErrorResponse;
    flowId?: string | null;
    flowResult?: string | null;
    flowStatus: string;
    holdingIdentityShortHash: string;
    timestamp: string;
};
