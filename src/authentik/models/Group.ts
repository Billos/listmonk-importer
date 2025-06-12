/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GroupMember } from './GroupMember';
import type { Role } from './Role';
/**
 * Group Serializer
 */
export type Group = {
    readonly pk: string;
    readonly num_pk: number;
    name: string;
    /**
     * Users added to this group will be superusers.
     */
    is_superuser?: boolean;
    parent?: string | null;
    readonly parent_name: string | null;
    users?: Array<number>;
    readonly users_obj: Array<GroupMember> | null;
    attributes?: Record<string, any>;
    roles?: Array<string>;
    readonly roles_obj: Array<Role>;
};

