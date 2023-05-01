/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PropertyResponseType } from './PropertyResponseType';
import type { RoleAssociationResponseType } from './RoleAssociationResponseType';

export type UserResponseType = {
    enabled: boolean;
    fullName: string;
    id: string;
    loginName: string;
    parentGroup?: string | null;
    passwordExpiry?: string | null;
    properties: Array<PropertyResponseType>;
    roleAssociations: Array<RoleAssociationResponseType>;
    ssoAuth: boolean;
    updateTimestamp: string;
    version: number;
};
