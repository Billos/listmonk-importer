/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompatibilityModeEnum } from './CompatibilityModeEnum';
/**
 * SCIMProvider Serializer
 */
export type SCIMProvider = {
    readonly pk: number;
    name: string;
    property_mappings?: Array<string>;
    /**
     * Property mappings used for group creation/updating.
     */
    property_mappings_group?: Array<string>;
    /**
     * Get object component so that we know how to edit the object
     */
    readonly component: string;
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
    /**
     * Base URL to SCIM requests, usually ends in /v2
     */
    url: string;
    verify_certificates?: boolean;
    /**
     * Authentication token
     */
    token: string;
    /**
     * Alter authentik behavior for vendor-specific SCIM implementations.
     */
    compatibility_mode?: CompatibilityModeEnum;
    exclude_users_service_account?: boolean;
    filter_group?: string | null;
    /**
     * When enabled, provider will not modify or create objects in the remote system.
     */
    dry_run?: boolean;
};

