/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OutgoingSyncDeleteAction } from './OutgoingSyncDeleteAction';
/**
 * MicrosoftEntraProvider Serializer
 */
export type MicrosoftEntraProvider = {
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

