/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserSelf } from './UserSelf';
/**
 * Response for the /user/me endpoint, returns the currently active user (as `user` property)
 * and, if this user is being impersonated, the original user in the `original` property.
 */
export type SessionUser = {
    user: UserSelf;
    original?: UserSelf;
};

