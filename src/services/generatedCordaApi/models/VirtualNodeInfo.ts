/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CpiIdentifier } from './CpiIdentifier';
import type { HoldingIdentity } from './HoldingIdentity';
import type { RouteConfiguration } from './RouteConfiguration';

export type VirtualNodeInfo = {
    cpiIdentifier: CpiIdentifier;
    cryptoDdlConnectionId?: string | null;
    cryptoDmlConnectionId: string;
    externalMessagingRouteConfiguration?: RouteConfiguration;
    flowOperationalStatus: VirtualNodeInfo.flowOperationalStatus;
    flowP2pOperationalStatus: VirtualNodeInfo.flowP2pOperationalStatus;
    flowStartOperationalStatus: VirtualNodeInfo.flowStartOperationalStatus;
    holdingIdentity: HoldingIdentity;
    hsmConnectionId?: string | null;
    operationInProgress?: string | null;
    uniquenessDdlConnectionId?: string | null;
    uniquenessDmlConnectionId: string;
    vaultDbOperationalStatus: VirtualNodeInfo.vaultDbOperationalStatus;
    vaultDdlConnectionId?: string | null;
    vaultDmlConnectionId: string;
};

export namespace VirtualNodeInfo {

    export enum flowOperationalStatus {
        ACTIVE = 'ACTIVE',
        INACTIVE = 'INACTIVE',
    }

    export enum flowP2pOperationalStatus {
        ACTIVE = 'ACTIVE',
        INACTIVE = 'INACTIVE',
    }

    export enum flowStartOperationalStatus {
        ACTIVE = 'ACTIVE',
        INACTIVE = 'INACTIVE',
    }

    export enum vaultDbOperationalStatus {
        ACTIVE = 'ACTIVE',
        INACTIVE = 'INACTIVE',
    }


}
