/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GroupMember } from './GroupMember';
/**
 * Serializer for email authenticator devices
 */
export type EmailDevice = {
    /**
     * The human-readable name of this device.
     */
    name: string;
    readonly pk: number;
    readonly email: string;
    readonly user: GroupMember;
};

