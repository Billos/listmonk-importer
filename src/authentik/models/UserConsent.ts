/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Application } from './Application';
import type { User } from './User';
/**
 * UserConsent Serializer
 */
export type UserConsent = {
    readonly pk: number;
    expires?: string | null;
    expiring?: boolean;
    user: User;
    application: Application;
    permissions?: string;
};

