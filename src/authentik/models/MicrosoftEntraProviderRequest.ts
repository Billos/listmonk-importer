/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OutgoingSyncDeleteAction } from './OutgoingSyncDeleteAction';
/**
 * MicrosoftEntraProvider Serializer
 */
export type MicrosoftEntraProviderRequest = {
    name: string;
    property_mappings?: Array<string>;
    /**
     * Property mappings used for group creation/updating.
     */
    property_mappings_group?: Array<string>;
    client_id: string;
    client_secret: string;
    tenant_id: string;
    exclude_users_service_account?: boolean;
    filter_group?: string | null;
    user_delete_action?: OutgoingSyncDeleteAction;
    group_delete_action?: OutgoingSyncDeleteAction;
    /**
     * When enabled, provider will not modify or create objects in the remote system.
     */
    dry_run?: boolean;
};

