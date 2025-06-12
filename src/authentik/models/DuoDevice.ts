/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GroupMember } from './GroupMember';
/**
 * Serializer for Duo authenticator devices
 */
export type DuoDevice = {
    readonly pk: number;
    /**
     * The human-readable name of this device.
     */
    name: string;
    readonly user: GroupMember;
};

