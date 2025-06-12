/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * AuthenticatedSession Serializer
 */
export type AuthenticatedSession = {
    uuid?: string;
    /**
     * Check if session is currently active session
     */
    readonly current: boolean;
    /**
     * Get parsed user agent
     */
    readonly user_agent: {
        /**
         * User agent device
         */
        device: {
            brand: string;
            family: string;
            model: string;
        };
        /**
         * User agent os
         */
        os: {
            family: string;
            major: string;
            minor: string;
            patch: string;
            patch_minor: string;
        };
        /**
         * User agent browser
         */
        user_agent: {
            family: string;
            major: string;
            minor: string;
            patch: string;
        };
        string: string;
    };
    /**
     * Get GeoIP Data
     */
    readonly geo_ip: {
        continent: string;
        country: string;
        lat: number;
        long: number;
        city: string;
    } | null;
    /**
     * Get ASN Data
     */
    readonly asn: {
        asn: number;
        as_org: string | null;
        network: string | null;
    } | null;
    user: number;
    readonly last_ip: string;
    readonly last_user_agent: string;
    readonly last_used: string;
    readonly expires: string;
};

