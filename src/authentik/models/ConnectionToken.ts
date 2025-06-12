/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Endpoint } from './Endpoint';
import type { GroupMember } from './GroupMember';
import type { RACProvider } from './RACProvider';
/**
 * ConnectionToken Serializer
 */
export type ConnectionToken = {
    pk?: string;
    provider: number;
    readonly provider_obj: RACProvider;
    endpoint: string;
    readonly endpoint_obj: Endpoint;
    readonly user: GroupMember;
};

