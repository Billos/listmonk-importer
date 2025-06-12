/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OutgoingSyncDeleteAction } from './OutgoingSyncDeleteAction';
/**
 * GoogleWorkspaceProvider Serializer
 */
export type PatchedGoogleWorkspaceProviderRequest = {
    name?: string;
    property_mappings?: Array<string>;
    /**
     * Property mappings used for group creation/updating.
     */
    property_mappings_group?: Array<string>;
    delegated_subject?: string;
    credentials?: any;
    scopes?: string;
    exclude_users_service_account?: boolean;
    filter_group?: string | null;
    user_delete_action?: OutgoingSyncDeleteAction;
    group_delete_action?: OutgoingSyncDeleteAction;
    default_group_email_domain?: string;
    /**
     * When enabled, provider will not modify or create objects in the remote system.
     */
    dry_run?: boolean;
};

