/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreatePermissionType = {
    groupVisibility?: string | null;
    permissionString: string;
    permissionType: CreatePermissionType.permissionType;
    virtualNode?: string | null;
};

export namespace CreatePermissionType {

    export enum permissionType {
        ALLOW = 'ALLOW',
        DENY = 'DENY',
    }


}
