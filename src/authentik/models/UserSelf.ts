/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserSelfGroups } from './UserSelfGroups';
import type { UserTypeEnum } from './UserTypeEnum';
/**
 * User Serializer for information a user can retrieve about themselves
 */
export type UserSelf = {
    readonly pk: number;
    /**
     * Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.
     */
    username: string;
    /**
     * User's display name.
     */
    name: string;
    /**
     * Designates whether this user should be treated as active. Unselect this instead of deleting accounts.
     */
    readonly is_active: boolean;
    readonly is_superuser: boolean;
    readonly groups: Array<UserSelfGroups>;
    email?: string;
    /**
     * User's avatar, either a http/https URL or a data URI
     */
    readonly avatar: string;
    readonly uid: string;
    /**
     * Get user settings with brand and group settings applied
     */
    readonly settings: Record<string, any>;
    type?: UserTypeEnum;
    /**
     * Get all system permissions assigned to the user
     */
    readonly system_permissions: Array<string>;
};

