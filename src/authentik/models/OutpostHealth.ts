/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Outpost health status
 */
export type OutpostHealth = {
    readonly uid: string;
    readonly last_seen: string;
    readonly version: string;
    readonly golang_version: string;
    readonly openssl_enabled: boolean;
    readonly openssl_version: string;
    /**
     * Get FIPS enabled
     */
    readonly fips_enabled: boolean | null;
    readonly version_should: string;
    readonly version_outdated: boolean;
    readonly build_hash: string;
    readonly build_hash_should: string;
    readonly hostname: string;
};

