/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AuthorizationCodeAuthMethodEnum } from './AuthorizationCodeAuthMethodEnum';
import type { GroupMatchingModeEnum } from './GroupMatchingModeEnum';
import type { PolicyEngineMode } from './PolicyEngineMode';
import type { ProviderTypeEnum } from './ProviderTypeEnum';
import type { UserMatchingModeEnum } from './UserMatchingModeEnum';
/**
 * OAuth Source Serializer
 */
export type PatchedOAuthSourceRequest = {
    /**
     * Source's display Name.
     */
    name?: string;
    /**
     * Internal source name, used in URLs.
     */
    slug?: string;
    enabled?: boolean;
    /**
     * Flow to use when authenticating existing users.
     */
    authentication_flow?: string | null;
    /**
     * Flow to use when enrolling new users.
     */
    enrollment_flow?: string | null;
    user_property_mappings?: Array<string>;
    group_property_mappings?: Array<string>;
    policy_engine_mode?: PolicyEngineMode;
    /**
     * How the source determines if an existing user should be authenticated or a new user enrolled.
     */
    user_matching_mode?: UserMatchingModeEnum;
    user_path_template?: string;
    /**
     * How the source determines if an existing group should be used or a new group created.
     */
    group_matching_mode?: GroupMatchingModeEnum;
    provider_type?: ProviderTypeEnum;
    /**
     * URL used to request the initial token. This URL is only required for OAuth 1.
     */
    request_token_url?: string | null;
    /**
     * URL the user is redirect to to conest the flow.
     */
    authorization_url?: string | null;
    /**
     * URL used by authentik to retrieve tokens.
     */
    access_token_url?: string | null;
    /**
     * URL used by authentik to get user information.
     */
    profile_url?: string | null;
    consumer_key?: string;
    consumer_secret?: string;
    additional_scopes?: string;
    oidc_well_known_url?: string;
    oidc_jwks_url?: string;
    oidc_jwks?: any;
    /**
     * How to perform authentication during an authorization_code token request flow
     */
    authorization_code_auth_method?: AuthorizationCodeAuthMethodEnum;
};

