/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Group Serializer
 */
export type PatchedGroupRequest = {
    name?: string;
    /**
     * Users added to this group will be superusers.
     */
    is_superuser?: boolean;
    parent?: string | null;
    users?: Array<number>;
    attributes?: Record<string, any>;
    roles?: Array<string>;
};

