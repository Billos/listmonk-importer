/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LDAPAPIAccessMode } from './LDAPAPIAccessMode';
/**
 * LDAPProvider Serializer
 */
export type LDAPProviderRequest = {
    name: string;
    /**
     * Flow used for authentication when the associated application is accessed by an un-authenticated user.
     */
    authentication_flow?: string | null;
    /**
     * Flow used when authorizing this provider.
     */
    authorization_flow: string;
    /**
     * Flow used ending the session from a provider.
     */
    invalidation_flow: string;
    property_mappings?: Array<string>;
    /**
     * DN under which objects are accessible.
     */
    base_dn?: string;
    certificate?: string | null;
    tls_server_name?: string;
    /**
     * The start for uidNumbers, this number is added to the user.pk to make sure that the numbers aren't too low for POSIX users. Default is 2000 to ensure that we don't collide with local users uidNumber
     */
    uid_start_number?: number;
    /**
     * The start for gidNumbers, this number is added to a number generated from the group.pk to make sure that the numbers aren't too low for POSIX groups. Default is 4000 to ensure that we don't collide with local groups or users primary groups gidNumber
     */
    gid_start_number?: number;
    search_mode?: LDAPAPIAccessMode;
    bind_mode?: LDAPAPIAccessMode;
    /**
     * When enabled, code-based multi-factor authentication can be used by appending a semicolon and the TOTP code to the password. This should only be enabled if all users that will bind to this provider have a TOTP device configured, as otherwise a password may incorrectly be rejected if it contains a semicolon.
     */
    mfa_support?: boolean;
};

