/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HsmAssociationInfo } from '../models/HsmAssociationInfo';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class HsmApiService {

    /**
     * @returns number An integer value specifying the version of the endpoint
     * @throws ApiError
     */
    public static getHsmGetprotocolversion(): CancelablePromise<number> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/hsm/getprotocolversion',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * This method enables you to assign a soft HSM to the tenant for the specified category.
     * @param tenantid Can either be a holding identity ID, the value 'p2p' for a cluster-level tenant of the P2P services, or the value 'rpc-api' for a cluster-level tenant of the HTTP RPC API
     * @param category The category of the HSM; can be the value 'ACCOUNTS', 'CI', 'LEDGER', 'NOTARY', 'SESSION_INIT', 'TLS', or 'JWT_KEY'
     * @returns HsmAssociationInfo
 * The HSM association details including:
 * id: the unique identifier of the HSM association
 * hsmId: the HSM identifier included into the association
 * category: the category of the HSM; can be the value 'ACCOUNTS', 'CI', 'LEDGER', 'NOTARY', 'SESSION_INIT',
 * 'TLS', or 'JWT_KEY'
 * masterKeyAlias: optional master key alias to be used on HSM
 * deprecatedAt: time when the association was deprecated, epoch time in seconds;
 * value of 0 means the association is active
     * @throws ApiError
     */
    public static postHsmSoftTenantidCategory(
tenantid: string,
category: string,
): CancelablePromise<HsmAssociationInfo> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/hsm/soft/{tenantid}/{category}',
            path: {
                'tenantid': tenantid,
                'category': category,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * This method retrieves information on the HSM of the specified category assigned to the tenant.
     * @param tenantid Can either be a holding identity ID, the value 'p2p' for a cluster-level tenant of the P2P services, or the value 'rpc-api' for a cluster-level tenant of the HTTP RPC API
     * @param category The category of the HSM; can be the value 'ACCOUNTS', 'CI', 'LEDGER', 'NOTARY', 'SESSION_INIT', 'TLS', or 'JWT_KEY'
     * @returns any
 * The HSM association details including:
 * id: the unique identifier of the HSM association
 * hsmId: the HSM identifier included into the association
 * category: the category of the HSM; can be the value 'ACCOUNTS', 'CI', 'LEDGER', 'NOTARY', 'SESSION_INIT',
 * 'TLS', or 'JWT_KEY'
 * masterKeyAlias: optional master key alias to be used on HSM
 * deprecatedAt: time when the association was deprecated, epoch time in seconds;
 * value of 0 means the association is active
     * @throws ApiError
     */
    public static getHsmTenantidCategory(
tenantid: string,
category: string,
): CancelablePromise<HsmAssociationInfo | null> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/hsm/{tenantid}/{category}',
            path: {
                'tenantid': tenantid,
                'category': category,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * This method enables you to assign a hardware-backed HSM to the tenant for the specified category.
     * @param tenantid Can either be a holding identity ID, the value 'p2p' for a cluster-level tenant of the P2P services, or the value 'rpc-api' for a cluster-level tenant of the HTTP RPC API
     * @param category The category of the HSM; can be the value 'ACCOUNTS', 'CI', 'LEDGER', 'NOTARY', 'SESSION_INIT', 'TLS', or 'JWT_KEY'
     * @returns HsmAssociationInfo
 * The HSM association details including:
 * id: the unique identifier of the HSM association
 * hsmId: the HSM identifier included into the association
 * category: the category of the HSM; can be the value 'ACCOUNTS', 'CI', 'LEDGER', 'NOTARY', 'SESSION_INIT',
 * 'TLS', or 'JWT_KEY'
 * masterKeyAlias: optional master key alias to be used on HSM
 * deprecatedAt: time when the association was deprecated, epoch time in seconds;
 * value of 0 means the association is active
     * @throws ApiError
     */
    public static postHsmTenantidCategory(
tenantid: string,
category: string,
): CancelablePromise<HsmAssociationInfo> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/hsm/{tenantid}/{category}',
            path: {
                'tenantid': tenantid,
                'category': category,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

}
