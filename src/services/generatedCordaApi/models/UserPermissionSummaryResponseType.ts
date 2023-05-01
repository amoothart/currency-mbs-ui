/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PermissionSummaryResponseType } from './PermissionSummaryResponseType';

export type UserPermissionSummaryResponseType = {
    enabled: boolean;
    lastUpdateTimestamp: string;
    loginName: string;
    permissions: Array<PermissionSummaryResponseType>;
};
