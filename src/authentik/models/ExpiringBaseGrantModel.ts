/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OAuth2Provider } from './OAuth2Provider';
import type { User } from './User';
/**
 * Serializer for BaseGrantModel and ExpiringBaseGrant
 */
export type ExpiringBaseGrantModel = {
    readonly pk: number;
    provider: OAuth2Provider;
    user: User;
    /**
     * Check if token is expired yet.
     */
    readonly is_expired: boolean;
    expires?: string | null;
    scope: Array<string>;
};

