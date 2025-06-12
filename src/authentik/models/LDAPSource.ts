/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PolicyEngineMode } from './PolicyEngineMode';
import type { UserMatchingModeEnum } from './UserMatchingModeEnum';
/**
 * LDAP Source Serializer
 */
export type LDAPSource = {
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
    server_uri: string;
    /**
     * Optionally verify the LDAP Server's Certificate against the CA Chain in this keypair.
     */
    peer_certificate?: string | null;
    /**
     * Client certificate to authenticate against the LDAP Server's Certificate.
     */
    client_certificate?: string | null;
    bind_cn?: string;
    start_tls?: boolean;
    sni?: boolean;
    base_dn: string;
    /**
     * Prepended to Base DN for User-queries.
     */
    additional_user_dn?: string;
    /**
     * Prepended to Base DN for Group-queries.
     */
    additional_group_dn?: string;
    /**
     * Consider Objects matching this filter to be Users.
     */
    user_object_filter?: string;
    /**
     * Consider Objects matching this filter to be Groups.
     */
    group_object_filter?: string;
    /**
     * Field which contains members of a group.
     */
    group_membership_field?: string;
    /**
     * Attribute which matches the value of `group_membership_field`.
     */
    user_membership_attribute?: string;
    /**
     * Field which contains a unique Identifier.
     */
    object_uniqueness_field?: string;
    /**
     * Update internal authentik password when login succeeds with LDAP
     */
    password_login_update_internal_password?: boolean;
    sync_users?: boolean;
    /**
     * When a user changes their password, sync it back to LDAP. This can only be enabled on a single LDAP source.
     */
    sync_users_password?: boolean;
    sync_groups?: boolean;
    sync_parent_group?: string | null;
    /**
     * Get cached source connectivity
     */
    readonly connectivity: Record<string, Record<string, string>> | null;
    /**
     * Lookup group membership based on a user attribute instead of a group attribute. This allows nested group resolution on systems like FreeIPA and Active Directory
     */
    lookup_groups_from_user?: boolean;
    /**
     * Delete authentik users and groups which were previously supplied by this source, but are now missing from it.
     */
    delete_not_found_objects?: boolean;
};

