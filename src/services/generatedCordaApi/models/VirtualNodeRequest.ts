/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Details of the virtual node to be created
 */
export type VirtualNodeRequest = {
    cpiFileChecksum: string;
    cryptoDdlConnection?: string | null;
    cryptoDmlConnection?: string | null;
    uniquenessDdlConnection?: string | null;
    uniquenessDmlConnection?: string | null;
    vaultDdlConnection?: string | null;
    vaultDmlConnection?: string | null;
    x500Name: string;
};
