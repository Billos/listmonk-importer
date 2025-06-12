/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GroupMember } from './GroupMember';
/**
 * Serializer for totp authenticator devices
 */
export type TOTPDevice = {
    /**
     * The human-readable name of this device.
     */
    name: string;
    readonly pk: number;
    readonly user: GroupMember;
};

