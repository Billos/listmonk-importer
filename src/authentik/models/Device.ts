/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Serializer for Duo authenticator devices
 */
export type Device = {
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
    pk: string;
    name: string;
    /**
     * Get type of device
     */
    readonly type: string;
    confirmed: boolean;
    readonly created: string;
    readonly last_updated: string;
    readonly last_used: string | null;
    /**
     * Get extra description
     */
    readonly extra_description: string;
};

