/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Get system information.
 */
export type SystemInfo = {
    /**
     * Get HTTP Request headers
     */
    readonly http_headers: Record<string, string>;
    /**
     * Get HTTP host
     */
    readonly http_host: string;
    /**
     * Get HTTP Secure flag
     */
    readonly http_is_secure: boolean;
    /**
     * Get versions
     */
    readonly runtime: {
        python_version: string;
        environment: string;
        architecture: string;
        platform: string;
        uname: string;
        openssl_version: string;
        openssl_fips_enabled: boolean | null;
        authentik_version: string;
    };
    /**
     * Currently active brand
     */
    readonly brand: string;
    /**
     * Current server time
     */
    readonly server_time: string;
    /**
     * Whether the embedded outpost is disabled
     */
    readonly embedded_outpost_disabled: boolean;
    /**
     * Get the FQDN configured on the embedded outpost
     */
    readonly embedded_outpost_host: string;
};

