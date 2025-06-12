/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * User permission with additional object-related data
 */
export type ExtraUserObjectPermission = {
    readonly id: number;
    readonly codename: string;
    readonly model: string;
    readonly app_label: string;
    object_pk: string;
    readonly name: string;
    /**
     * Get app label from permission's model
     */
    readonly app_label_verbose: string;
    /**
     * Get model label from permission's model
     */
    readonly model_verbose: string;
    /**
     * Get model description from attached model. This operation takes at least
     * one additional query, and the description is only shown if the user/role has the
     * view_ permission on the object
     */
    readonly object_description: string | null;
};

