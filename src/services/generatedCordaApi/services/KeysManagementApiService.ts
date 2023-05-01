/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { KeyMetaData } from '../models/KeyMetaData';
import type { KeyPairIdentifier } from '../models/KeyPairIdentifier';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class KeysManagementApiService {

    /**
     * @returns number An integer value specifying the version of the endpoint
     * @throws ApiError
     */
    public static getKeysGetprotocolversion(): CancelablePromise<number> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/keys/getprotocolversion',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * This method retrieves information about a list of key pairs belonging to a tenant.
     * @param tenantid Can either be a holding identity ID, the value 'p2p' for a cluster-level tenant of the P2P services, or the value 'rpc-api' for a cluster-level tenant of the HTTP RPC API
     * @param skip The response paging information, number of records to skip
     * @param take The response paging information, that is, the number of records to return. The actual number returned may be less than requested.
     * @param orderby Specifies how to order the results. Can be one of 'NONE', 'TIMESTAMP', 'CATEGORY', 'SCHEME_CODE_NAME', 'ALIAS', 'MASTER_KEY_ALIAS', 'EXTERNAL_ID', 'ID', 'TIMESTAMP_DESC', 'CATEGORY_DESC', 'SCHEME_CODE_NAME_DESC', 'ALIAS_DESC', 'MASTER_KEY_ALIAS_DESC', 'EXTERNAL_ID_DESC', 'ID_DESC'.
     * @param category Category of the HSM which handles the key pairs. Can be one of 'ACCOUNTS', 'CI', 'LEDGER', 'NOTARY', 'SESSION_INIT', 'TLS', 'JWT_KEY'.
     * @param schemecodename The key pairs' signature scheme name. For example, 'CORDA.RSA', 'CORDA.ECDSA.SECP256K1', 'CORDA.ECDSA.SECP256R1', 'CORDA.EDDSA.ED25519', 'CORDA.SPHINCS-256'.
     * @param alias The alias under which the key pair is stored
     * @param masterkeyalias The alias of the wrapping key
     * @param createdafter Only include key pairs which were created on or after the specified time. Must be a valid instant in UTC, such as 2022-12-03T10:15:30.00Z.
     * @param createdbefore Only include key pairs which were created on or before the specified time. Must be a valid instant in UTC, such as 2022-12-03T10:15:30.00Z.
     * @param id Only include key pairs associated with the specified list of key IDs. If specified, other filter parameters will be ignored.
     * @returns KeyMetaData A map of key IDs to the respective key pair information
     * @throws ApiError
     */
    public static getKeysTenantid(
tenantid: string,
skip?: number,
take?: number,
orderby?: string,
category?: string | null,
schemecodename?: string | null,
alias?: string | null,
masterkeyalias?: string | null,
createdafter?: string | null,
createdbefore?: string | null,
id?: Array<string> | null,
): CancelablePromise<Record<string, KeyMetaData>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/keys/{tenantid}',
            path: {
                'tenantid': tenantid,
            },
            query: {
                'skip': skip,
                'take': take,
                'orderby': orderby,
                'category': category,
                'schemecodename': schemecodename,
                'alias': alias,
                'masterkeyalias': masterkeyalias,
                'createdafter': createdafter,
                'createdbefore': createdbefore,
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * This method generates a new key pair for a tenant.
     * @param tenantid Can either be a holding identity ID, the value 'p2p' for a cluster-level tenant of the P2P services, or the value 'rpc-api' for a cluster-level tenant of the HTTP RPC API
     * @param alias The alias under which the new key pair will be stored
     * @param hsmcategory Category of the HSM which handles the key pairs. Can be one of 'ACCOUNTS', 'CI', 'LEDGER', 'NOTARY', 'SESSION_INIT', 'TLS', 'JWT_KEY'.
     * @param scheme The key's scheme describing which type of the key pair to generate. For example, 'CORDA.RSA', 'CORDA.ECDSA.SECP256K1', 'CORDA.ECDSA.SECP256R1', 'CORDA.EDDSA.ED25519', 'CORDA.SPHINCS-256'.
     * @returns KeyPairIdentifier The ID of the newly generated key pair
     * @throws ApiError
     */
    public static postKeysTenantidAliasAliasCategoryHsmcategorySchemeScheme(
tenantid: string,
alias: string,
hsmcategory: string,
scheme: string,
): CancelablePromise<KeyPairIdentifier> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/keys/{tenantid}/alias/{alias}/category/{hsmcategory}/scheme/{scheme}',
            path: {
                'tenantid': tenantid,
                'alias': alias,
                'hsmcategory': hsmcategory,
                'scheme': scheme,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * This method retrieves a list of supported key schemes for a specified tenant and HSM category.
     * @param tenantid Can either be a holding identity ID, the value 'p2p' for a cluster-level tenant of the P2P services, or the value 'rpc-api' for a cluster-level tenant of the HTTP RPC API
     * @param hsmcategory The category of the HSM. Can be the value 'ACCOUNTS', 'CI', 'LEDGER', 'NOTARY', 'SESSION_INIT', 'TLS', or 'JWT_KEY'
     * @returns string The list of scheme codes which are supported by the associated HSM integration
     * @throws ApiError
     */
    public static getKeysTenantidSchemesHsmcategory(
tenantid: string,
hsmcategory: string,
): CancelablePromise<Array<string>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/keys/{tenantid}/schemes/{hsmcategory}',
            path: {
                'tenantid': tenantid,
                'hsmcategory': hsmcategory,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * This method retrieves a tenant's public key in PEM format.
     * @param tenantid Can either be a holding identity ID, the value 'p2p' for a cluster-level tenant of the P2P services, or the value 'rpc-api' for a cluster-level tenant of the HTTP RPC API
     * @param keyid Identifier of the public key to be retrieved
     * @returns string The public key in PEM format
     * @throws ApiError
     */
    public static getKeysTenantidKeyid(
tenantid: string,
keyid: string,
): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/keys/{tenantid}/{keyid}',
            path: {
                'tenantid': tenantid,
                'keyid': keyid,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

}
