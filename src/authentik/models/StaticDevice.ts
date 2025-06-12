/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GroupMember } from './GroupMember';
import type { StaticDeviceToken } from './StaticDeviceToken';
/**
 * Serializer for static authenticator devices
 */
export type StaticDevice = {
    /**
     * The human-readable name of this device.
     */
    name: string;
    readonly token_set: Array<StaticDeviceToken>;
    readonly pk: number;
    readonly user: GroupMember;
};

