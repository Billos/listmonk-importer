/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserTypeEnum } from './UserTypeEnum';
/**
 * User Serializer
 */
export type PatchedUserRequest = {
    username?: string;
    /**
     * User's display name.
     */
    name?: string;
    /**
     * Designates whether this user should be treated as active. Unselect this instead of deleting accounts.
     */
    is_active?: boolean;
    last_login?: string | null;
    groups?: Array<string>;
    email?: string;
    attributes?: Record<string, any>;
    path?: string;
    type?: UserTypeEnum;
};

