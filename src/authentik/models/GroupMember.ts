/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Stripped down user serializer to show relevant users for groups
 */
export type GroupMember = {
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
    is_active?: boolean;
    last_login?: string | null;
    email?: string;
    attributes?: Record<string, any>;
    readonly uid: string;
};

