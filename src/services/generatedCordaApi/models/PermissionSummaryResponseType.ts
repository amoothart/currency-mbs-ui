/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PermissionSummaryResponseType = {
    groupVisibility?: string | null;
    id: string;
    permissionString: string;
    permissionType: PermissionSummaryResponseType.permissionType;
    virtualNode?: string | null;
};

export namespace PermissionSummaryResponseType {

    export enum permissionType {
        ALLOW = 'ALLOW',
        DENY = 'DENY',
    }


}
