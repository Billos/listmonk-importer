/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Simplified Group Serializer for user's groups
 */
export type UserGroup = {
    readonly pk: string;
    /**
     * Get a numerical, int32 ID for the group
     */
    readonly num_pk: number;
    name: string;
    /**
     * Users added to this group will be superusers.
     */
    is_superuser?: boolean;
    parent?: string | null;
    readonly parent_name: string | null;
    attributes?: Record<string, any>;
};

