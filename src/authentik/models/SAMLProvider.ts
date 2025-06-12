/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DigestAlgorithmEnum } from './DigestAlgorithmEnum';
import type { SignatureAlgorithmEnum } from './SignatureAlgorithmEnum';
import type { SpBindingEnum } from './SpBindingEnum';
/**
 * SAMLProvider Serializer
 */
export type SAMLProvider = {
    readonly pk: number;
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
     * Get object component so that we know how to edit the object
     */
    readonly component: string;
    /**
     * Internal application name, used in URLs.
     */
    readonly assigned_application_slug: string;
    /**
     * Application's display Name.
     */
    readonly assigned_application_name: string;
    /**
     * Internal application name, used in URLs.
     */
    readonly assigned_backchannel_application_slug: string;
    /**
     * Application's display Name.
     */
    readonly assigned_backchannel_application_name: string;
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
    acs_url: string;
    /**
     * Value of the audience restriction field of the assertion. When left empty, no audience restriction will be added.
     */
    audience?: string;
    /**
     * Also known as EntityID
     */
    issuer?: string;
    /**
     * Assertion valid not before current time + this value (Format: hours=-1;minutes=-2;seconds=-3).
     */
    assertion_valid_not_before?: string;
    /**
     * Assertion not valid on or after current time + this value (Format: hours=1;minutes=2;seconds=3).
     */
    assertion_valid_not_on_or_after?: string;
    /**
     * Session not valid on or after current time + this value (Format: hours=1;minutes=2;seconds=3).
     */
    session_valid_not_on_or_after?: string;
    /**
     * Configure how the NameID value will be created. When left empty, the NameIDPolicy of the incoming request will be considered
     */
    name_id_mapping?: string | null;
    /**
     * Configure how the AuthnContextClassRef value will be created. When left empty, the AuthnContextClassRef will be set based on which authentication methods the user used to authenticate.
     */
    authn_context_class_ref_mapping?: string | null;
    digest_algorithm?: DigestAlgorithmEnum;
    signature_algorithm?: SignatureAlgorithmEnum;
    /**
     * Keypair used to sign outgoing Responses going to the Service Provider.
     */
    signing_kp?: string | null;
    /**
     * When selected, incoming assertion's Signatures will be validated against this certificate. To allow unsigned Requests, leave on default.
     */
    verification_kp?: string | null;
    /**
     * When selected, incoming assertions are encrypted by the IdP using the public key of the encryption keypair. The assertion is decrypted by the SP using the the private key.
     */
    encryption_kp?: string | null;
    sign_assertion?: boolean;
    sign_response?: boolean;
    /**
     * This determines how authentik sends the response back to the Service Provider.
     */
    sp_binding?: SpBindingEnum;
    /**
     * Default relay_state value for IDP-initiated logins
     */
    default_relay_state?: string;
    /**
     * Get metadata download URL
     */
    readonly url_download_metadata: string;
    /**
     * Get SSO Post URL
     */
    readonly url_sso_post: string;
    /**
     * Get SSO Redirect URL
     */
    readonly url_sso_redirect: string;
    /**
     * Get SSO IDP-Initiated URL
     */
    readonly url_sso_init: string;
    /**
     * Get SLO POST URL
     */
    readonly url_slo_post: string;
    /**
     * Get SLO redirect URL
     */
    readonly url_slo_redirect: string;
};

