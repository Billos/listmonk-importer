/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BindingTypeEnum } from './BindingTypeEnum';
import type { DigestAlgorithmEnum } from './DigestAlgorithmEnum';
import type { GroupMatchingModeEnum } from './GroupMatchingModeEnum';
import type { NameIdPolicyEnum } from './NameIdPolicyEnum';
import type { PolicyEngineMode } from './PolicyEngineMode';
import type { SignatureAlgorithmEnum } from './SignatureAlgorithmEnum';
import type { UserMatchingModeEnum } from './UserMatchingModeEnum';
/**
 * SAMLSource Serializer
 */
export type SAMLSource = {
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
    readonly icon: string;
    /**
     * How the source determines if an existing group should be used or a new group created.
     */
    group_matching_mode?: GroupMatchingModeEnum;
    /**
     * Flow used before authentication.
     */
    pre_authentication_flow: string;
    /**
     * Also known as Entity ID. Defaults the Metadata URL.
     */
    issuer?: string;
    /**
     * URL that the initial Login request is sent to.
     */
    sso_url: string;
    /**
     * Optional URL if your IDP supports Single-Logout.
     */
    slo_url?: string | null;
    /**
     * Allows authentication flows initiated by the IdP. This can be a security risk, as no validation of the request ID is done.
     */
    allow_idp_initiated?: boolean;
    /**
     * NameID Policy sent to the IdP. Can be unset, in which case no Policy is sent.
     */
    name_id_policy?: NameIdPolicyEnum;
    binding_type?: BindingTypeEnum;
    /**
     * When selected, incoming assertion's Signatures will be validated against this certificate. To allow unsigned Requests, leave on default.
     */
    verification_kp?: string | null;
    /**
     * Keypair used to sign outgoing Responses going to the Identity Provider.
     */
    signing_kp?: string | null;
    digest_algorithm?: DigestAlgorithmEnum;
    signature_algorithm?: SignatureAlgorithmEnum;
    /**
     * Time offset when temporary users should be deleted. This only applies if your IDP uses the NameID Format 'transient', and the user doesn't log out manually. (Format: hours=1;minutes=2;seconds=3).
     */
    temporary_user_delete_after?: string;
    /**
     * When selected, incoming assertions are encrypted by the IdP using the public key of the encryption keypair. The assertion is decrypted by the SP using the the private key.
     */
    encryption_kp?: string | null;
};

