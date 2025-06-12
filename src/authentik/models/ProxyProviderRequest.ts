/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProxyMode } from './ProxyMode';
/**
 * ProxyProvider Serializer
 */
export type ProxyProviderRequest = {
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
    internal_host?: string;
    external_host: string;
    /**
     * Validate SSL Certificates of upstream servers
     */
    internal_host_ssl_validation?: boolean;
    certificate?: string | null;
    /**
     * Regular expressions for which authentication is not required. Each new line is interpreted as a new Regular Expression.
     */
    skip_path_regex?: string;
    /**
     * Set a custom HTTP-Basic Authentication header based on values from authentik.
     */
    basic_auth_enabled?: boolean;
    /**
     * User/Group Attribute used for the password part of the HTTP-Basic Header.
     */
    basic_auth_password_attribute?: string;
    /**
     * User/Group Attribute used for the user part of the HTTP-Basic Header. If not set, the user's Email address is used.
     */
    basic_auth_user_attribute?: string;
    /**
     * Enable support for forwardAuth in traefik and nginx auth_request. Exclusive with internal_host.
     */
    mode?: ProxyMode;
    /**
     * When enabled, this provider will intercept the authorization header and authenticate requests based on its value.
     */
    intercept_header_auth?: boolean;
    cookie_domain?: string;
    jwt_federation_sources?: Array<string>;
    jwt_federation_providers?: Array<number>;
    /**
     * Tokens not valid on or after current time + this value (Format: hours=1;minutes=2;seconds=3).
     */
    access_token_validity?: string;
    /**
     * Tokens not valid on or after current time + this value (Format: hours=1;minutes=2;seconds=3).
     */
    refresh_token_validity?: string;
};

