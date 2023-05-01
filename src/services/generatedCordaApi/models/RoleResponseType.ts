/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PermissionAssociationResponseType } from './PermissionAssociationResponseType';

export type RoleResponseType = {
    groupVisibility?: string | null;
    id: string;
    permissions: Array<PermissionAssociationResponseType>;
    roleName: string;
    updateTimestamp: string;
    version: number;
};
