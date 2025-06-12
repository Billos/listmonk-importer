/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * RadiusProvider Serializer
 */
export type PatchedRadiusProviderRequest = {
    name?: string;
    /**
     * Flow used for authentication when the associated application is accessed by an un-authenticated user.
     */
    authentication_flow?: string | null;
    /**
     * Flow used when authorizing this provider.
     */
    authorization_flow?: string;
    /**
     * Flow used ending the session from a provider.
     */
    invalidation_flow?: string;
    property_mappings?: Array<string>;
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

