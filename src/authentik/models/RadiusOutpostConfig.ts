/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * RadiusProvider Serializer
 */
export type RadiusOutpostConfig = {
    readonly pk: number;
    name: string;
    application_slug: string;
    auth_flow_slug: string;
    /**
     * List of CIDRs (comma-separated) that clients can connect from. A more specific CIDR will match before a looser one. Clients connecting from a non-specified CIDR will be dropped.
     */
    client_networks?: string;
    /**
     * Shared secret between clients and server to hash packets.
     */
    shared_secret?: string;
    /**
     * When enabled, code-based multi-factor authentication can be used by appending a semicolon and the TOTP code to the password. This should only be enabled if all users that will bind to this provider have a TOTP device configured, as otherwise a password may incorrectly be rejected if it contains a semicolon.
     */
    mfa_support?: boolean;
};

