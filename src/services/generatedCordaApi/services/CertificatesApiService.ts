/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GenerateCsrWrapperRequest } from '../models/GenerateCsrWrapperRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CertificatesApiService {

    /**
     * This method gets the certificate chain aliases for a cluster.
     * @param usage The certificate usage. Can be either 'p2p-tls' for a TLS certificate to be used in P2P communication, 'p2p-session' for a session certificate to be used in P2P communication, 'rest-tls' for a TLS certificate to be used in REST communication, or 'code-signer' for a certificate of the code signing service.
     * @returns string The cluster level certificates aliases in the usage.
     * @throws ApiError
     */
    public static getCertificatesClusterUsage(
usage: string,
): CancelablePromise<Array<string>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/certificates/cluster/{usage}',
            path: {
                'usage': usage,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * This method imports a certificate chain for a cluster.
     * @param usage The certificate usage. Can be either 'p2p-tls' for a TLS certificate to be used in P2P communication, 'p2p-session' for a session certificate to be used in P2P communication, 'rest-tls' for a TLS certificate to be used in REST communication, or 'code-signer' for a certificate of the code signing service.
     * @param formData requestBody
     * @returns any Success
     * @throws ApiError
     */
    public static putCertificatesClusterUsage(
usage: string,
formData: {
/**
 * The unique alias under which the certificate chain will be stored
 */
alias?: string;
certificate?: Array<Blob>;
},
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/certificates/cluster/{usage}',
            path: {
                'usage': usage,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * This method gets the certificate chain in PEM format for a cluster.
     * @param usage The certificate usage. Can be either 'p2p-tls' for a TLS certificate to be used in P2P communication, 'p2p-session' for a session certificate to be used in P2P communication, 'rest-tls' for a TLS certificate to be used in REST communication, or 'code-signer' for a certificate of the code signing service.
     * @param alias The certificate chain unique alias.
     * @returns string The certificate in PEM format.
     * @throws ApiError
     */
    public static getCertificatesClusterUsageAlias(
usage: string,
alias: string,
): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/certificates/cluster/{usage}/{alias}',
            path: {
                'usage': usage,
                'alias': alias,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * @returns number An integer value specifying the version of the endpoint
     * @throws ApiError
     */
    public static getCertificatesGetprotocolversion(): CancelablePromise<number> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/certificates/getprotocolversion',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * This method gets the certificate chain aliases for a virtual node.
     * @param usage The certificate usage. Can be either 'p2p-tls' for a TLS certificate to be used in P2P communication, 'p2p-session' for a session certificate to be used in P2P communication, 'rest-tls' for a TLS certificate to be used in REST communication, or 'code-signer' for a certificate of the code signing service.
     * @param holdingidentityid The certificate holding identity ID
     * @returns string The virtual node certificates aliases in the usage.
     * @throws ApiError
     */
    public static getCertificatesVnodeHoldingidentityidUsage(
usage: string,
holdingidentityid: string | null,
): CancelablePromise<Array<string>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/certificates/vnode/{holdingidentityid}/{usage}',
            path: {
                'usage': usage,
                'holdingidentityid': holdingidentityid,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * This method imports a certificate chain for a virtual node.
     * @param usage The certificate usage. Can be either 'p2p-tls' for a TLS certificate to be used in P2P communication, 'p2p-session' for a session certificate to be used in P2P communication, 'rest-tls' for a TLS certificate to be used in REST communication, or 'code-signer' for a certificate of the code signing service.
     * @param holdingidentityid The certificate holding identity ID
     * @param formData requestBody
     * @returns any Success
     * @throws ApiError
     */
    public static putCertificatesVnodeHoldingidentityidUsage(
usage: string,
holdingidentityid: string | null,
formData: {
/**
 * The unique alias under which the certificate chain will be stored
 */
alias?: string;
certificate?: Array<Blob>;
},
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/certificates/vnode/{holdingidentityid}/{usage}',
            path: {
                'usage': usage,
                'holdingidentityid': holdingidentityid,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * This method gets the certificate chain in PEM format for a virtual node.
     * @param usage The certificate usage. Can be either 'p2p-tls' for a TLS certificate to be used in P2P communication, 'p2p-session' for a session certificate to be used in P2P communication, 'rest-tls' for a TLS certificate to be used in REST communication, or 'code-signer' for a certificate of the code signing service.
     * @param holdingidentityid The certificate holding identity ID
     * @param alias The certificate chain unique alias.
     * @returns string The certificate in PEM format.
     * @throws ApiError
     */
    public static getCertificatesVnodeHoldingidentityidUsageAlias(
usage: string,
holdingidentityid: string | null,
alias: string,
): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/certificates/vnode/{holdingidentityid}/{usage}/{alias}',
            path: {
                'usage': usage,
                'holdingidentityid': holdingidentityid,
                'alias': alias,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * This method enables you to generate a certificate signing request (CSR) for a tenant.
     * @param tenantid Can either be a holding identity ID, the value 'p2p' for a cluster-level tenant of the P2P services, or the value 'rest' for a cluster-level tenant of the REST
     * @param keyid Identifier of the public key that will be included in the certificate
     * @param requestBody requestBody
     * @returns string The CSR in PEM format.
     * @throws ApiError
     */
    public static postCertificatesTenantidKeyid(
tenantid: string,
keyid: string,
requestBody: GenerateCsrWrapperRequest,
): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/certificates/{tenantid}/{keyid}',
            path: {
                'tenantid': tenantid,
                'keyid': keyid,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

}
