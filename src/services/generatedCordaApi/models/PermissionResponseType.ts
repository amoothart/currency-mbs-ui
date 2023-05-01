/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PermissionResponseType = {
    groupVisibility?: string | null;
    id: string;
    permissionString: string;
    permissionType: PermissionResponseType.permissionType;
    updateTimestamp: string;
    version: number;
    virtualNode?: string | null;
};

export namespace PermissionResponseType {

    export enum permissionType {
        ALLOW = 'ALLOW',
        DENY = 'DENY',
    }


}
