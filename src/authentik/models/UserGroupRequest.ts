/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Simplified Group Serializer for user's groups
 */
export type UserGroupRequest = {
    name: string;
    /**
     * Users added to this group will be superusers.
     */
    is_superuser?: boolean;
    parent?: string | null;
    attributes?: Record<string, any>;
};

