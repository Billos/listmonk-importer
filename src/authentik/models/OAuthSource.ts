/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AuthorizationCodeAuthMethodEnum } from './AuthorizationCodeAuthMethodEnum';
import type { GroupMatchingModeEnum } from './GroupMatchingModeEnum';
import type { PolicyEngineMode } from './PolicyEngineMode';
import type { ProviderTypeEnum } from './ProviderTypeEnum';
import type { SourceType } from './SourceType';
import type { UserMatchingModeEnum } from './UserMatchingModeEnum';
/**
 * OAuth Source Serializer
 */
export type OAuthSource = {
    readonly pk: string;
    /**
     * Source's display Name.
     */
    name: string;
    /**
     * Internal source name, used in URLs.
     */
    slug: string;
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
    /**
     * Get object component so that we know how to edit the object
     */
    readonly component: string;
    /**
     * Return object's verbose_name
     */
    readonly verbose_name: string;
    /**
     * Return object's plural verbose_name
     */
    readonly verbose_name_plural: string;
    /**
     * Return internal model name
     */
    readonly meta_model_name: string;
    policy_engine_mode?: PolicyEngineMode;
    /**
     * How the source determines if an existing user should be authenticated or a new user enrolled.
     */
    user_matching_mode?: UserMatchingModeEnum;
    /**
     * Objects that are managed by authentik. These objects are created and updated automatically. This flag only indicates that an object can be overwritten by migrations. You can still modify the objects via the API, but expect changes to be overwritten in a later update.
     */
    readonly managed: string | null;
    user_path_template?: string;
    readonly icon: string | null;
    /**
     * How the source determines if an existing group should be used or a new group created.
     */
    group_matching_mode?: GroupMatchingModeEnum;
    provider_type: ProviderTypeEnum;
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
    consumer_key: string;
    /**
     * Get OAuth Callback URL
     */
    readonly callback_url: string;
    additional_scopes?: string;
    readonly type: SourceType;
    oidc_well_known_url?: string;
    oidc_jwks_url?: string;
    oidc_jwks?: any;
    /**
     * How to perform authentication during an authorization_code token request flow
     */
    authorization_code_auth_method?: AuthorizationCodeAuthMethodEnum;
};

