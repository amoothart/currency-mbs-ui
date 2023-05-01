/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 *
 * Details of the role to be created:
 * roleName - name of the role
 * groupVisibility - optional group visibility of the role
 * 
 */
export type CreateRoleType = {
    groupVisibility?: string | null;
    roleName: string;
};
