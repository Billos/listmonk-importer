/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Flow } from './Flow';
import type { GroupMember } from './GroupMember';
/**
 * Invitation Serializer
 */
export type Invitation = {
    readonly pk: string;
    name: string;
    expires?: string | null;
    fixed_data?: Record<string, any>;
    readonly created_by: GroupMember;
    /**
     * When enabled, the invitation will be deleted after usage.
     */
    single_use?: boolean;
    /**
     * When set, only the configured flow can use this invitation.
     */
    flow?: string | null;
    readonly flow_obj: Flow;
};

