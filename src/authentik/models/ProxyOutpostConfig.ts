/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OpenIDConnectConfiguration } from './OpenIDConnectConfiguration';
import type { ProxyMode } from './ProxyMode';
/**
 * Proxy provider serializer for outposts
 */
export type ProxyOutpostConfig = {
    readonly pk: number;
    name: string;
    internal_host?: string;
    external_host: string;
    /**
     * Validate SSL Certificates of upstream servers
     */
    internal_host_ssl_validation?: boolean;
    client_id?: string;
    client_secret?: string;
    readonly oidc_configuration: OpenIDConnectConfiguration;
    cookie_secret?: string;
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
    cookie_domain?: string;
    /**
     * Get token validity as second count
     */
    readonly access_token_validity: number | null;
    /**
     * When enabled, this provider will intercept the authorization header and authenticate requests based on its value.
     */
    intercept_header_auth?: boolean;
    /**
     * Get all the scope names the outpost should request,
     * including custom-defined ones
     */
    readonly scopes_to_request: Array<string>;
    /**
     * Internal application name, used in URLs.
     */
    readonly assigned_application_slug: string;
    /**
     * Application's display Name.
     */
    readonly assigned_application_name: string;
};

