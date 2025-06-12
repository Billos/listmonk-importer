/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompatibilityModeEnum } from './CompatibilityModeEnum';
/**
 * SCIMProvider Serializer
 */
export type SCIMProviderRequest = {
    name: string;
    property_mappings?: Array<string>;
    /**
     * Property mappings used for group creation/updating.
     */
    property_mappings_group?: Array<string>;
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

