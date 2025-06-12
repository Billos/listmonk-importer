/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GroupMatchingModeEnum } from './GroupMatchingModeEnum';
import type { KadminTypeEnum } from './KadminTypeEnum';
import type { PolicyEngineMode } from './PolicyEngineMode';
import type { UserMatchingModeEnum } from './UserMatchingModeEnum';
/**
 * Kerberos Source Serializer
 */
export type PatchedKerberosSourceRequest = {
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
    /**
     * Kerberos realm
     */
    realm?: string;
    /**
     * Custom krb5.conf to use. Uses the system one by default
     */
    krb5_conf?: string;
    /**
     * KAdmin server type
     */
    kadmin_type?: KadminTypeEnum;
    /**
     * Sync users from Kerberos into authentik
     */
    sync_users?: boolean;
    /**
     * When a user changes their password, sync it back to Kerberos
     */
    sync_users_password?: boolean;
    /**
     * Principal to authenticate to kadmin for sync.
     */
    sync_principal?: string;
    /**
     * Password to authenticate to kadmin for sync
     */
    sync_password?: string;
    /**
     * Keytab to authenticate to kadmin for sync. Must be base64-encoded or in the form TYPE:residual
     */
    sync_keytab?: string;
    /**
     * Credentials cache to authenticate to kadmin for sync. Must be in the form TYPE:residual
     */
    sync_ccache?: string;
    /**
     * Force the use of a specific server name for SPNEGO. Must be in the form HTTP@hostname
     */
    spnego_server_name?: string;
    /**
     * SPNEGO keytab base64-encoded or path to keytab in the form FILE:path
     */
    spnego_keytab?: string;
    /**
     * Credential cache to use for SPNEGO in form type:residual
     */
    spnego_ccache?: string;
    /**
     * If enabled, the authentik-stored password will be updated upon login with the Kerberos password backend
     */
    password_login_update_internal_password?: boolean;
};

