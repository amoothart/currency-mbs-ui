/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CreatePermissionType } from './CreatePermissionType';

/**
 * The details of the permissions to be created along with existing role identifiers newly created permissions should be associated with.
 */
export type BulkCreatePermissionsRequestType = {
    permissionsToCreate: Array<CreatePermissionType>;
    roleIds: Array<string>;
};
