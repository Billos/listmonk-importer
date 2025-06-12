/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GroupMember } from './GroupMember';
/**
 * Serializer for sms authenticator devices
 */
export type SMSDevice = {
    /**
     * The human-readable name of this device.
     */
    name: string;
    readonly pk: number;
    readonly phone_number: string;
    readonly user: GroupMember;
};

