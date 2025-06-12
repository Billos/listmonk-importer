/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ClientTypeEnum } from './ClientTypeEnum';
import type { IssuerModeEnum } from './IssuerModeEnum';
import type { RedirectURIRequest } from './RedirectURIRequest';
import type { SubModeEnum } from './SubModeEnum';
/**
 * OAuth2Provider Serializer
 */
export type OAuth2ProviderRequest = {
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
     * Confidential clients are capable of maintaining the confidentiality of their credentials. Public clients are incapable
     */
    client_type?: ClientTypeEnum;
    client_id?: string;
    client_secret?: string;
    /**
     * Access codes not valid on or after current time + this value (Format: hours=1;minutes=2;seconds=3).
     */
    access_code_validity?: string;
    /**
     * Tokens not valid on or after current time + this value (Format: hours=1;minutes=2;seconds=3).
     */
    access_token_validity?: string;
    /**
     * Tokens not valid on or after current time + this value (Format: hours=1;minutes=2;seconds=3).
     */
    refresh_token_validity?: string;
    /**
     * Include User claims from scopes in the id_token, for applications that don't access the userinfo endpoint.
     */
    include_claims_in_id_token?: boolean;
    /**
     * Key used to sign the tokens.
     */
    signing_key?: string | null;
    /**
     * Key used to encrypt the tokens. When set, tokens will be encrypted and returned as JWEs.
     */
    encryption_key?: string | null;
    redirect_uris: Array<RedirectURIRequest>;
    /**
     * Configure what data should be used as unique User Identifier. For most cases, the default should be fine.
     */
    sub_mode?: SubModeEnum;
    /**
     * Configure how the issuer field of the ID Token should be filled.
     */
    issuer_mode?: IssuerModeEnum;
    jwt_federation_sources?: Array<string>;
    jwt_federation_providers?: Array<number>;
};

