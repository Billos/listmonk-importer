/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserGroup } from './UserGroup';
import type { UserTypeEnum } from './UserTypeEnum';
/**
 * User Serializer
 */
export type User = {
    readonly pk: number;
    username: string;
    /**
     * User's display name.
     */
    name: string;
    /**
     * Designates whether this user should be treated as active. Unselect this instead of deleting accounts.
     */
    is_active?: boolean;
    last_login?: string | null;
    readonly date_joined: string;
    readonly is_superuser: boolean;
    groups?: Array<string>;
    readonly groups_obj: Array<UserGroup> | null;
    email?: string;
    /**
     * User's avatar, either a http/https URL or a data URI
     */
    readonly avatar: string;
    attributes?: Record<string, any>;
    readonly uid: string;
    path?: string;
    type?: UserTypeEnum;
    readonly uuid: string;
    readonly password_change_date: string;
};

