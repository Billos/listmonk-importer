/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Provider Serializer
 */
export type Provider = {
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
};

