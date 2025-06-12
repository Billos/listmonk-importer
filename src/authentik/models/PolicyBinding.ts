/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Group } from './Group';
import type { Policy } from './Policy';
import type { User } from './User';
/**
 * PolicyBinding Serializer
 */
export type PolicyBinding = {
    readonly pk: string;
    policy?: string | null;
    group?: string | null;
    user?: number | null;
    readonly policy_obj: Policy;
    readonly group_obj: Group;
    readonly user_obj: User;
    target: string;
    /**
     * Negates the outcome of the policy. Messages are unaffected.
     */
    negate?: boolean;
    enabled?: boolean;
    order: number;
    /**
     * Timeout after which Policy execution is terminated.
     */
    timeout?: number;
    /**
     * Result if the Policy execution fails.
     */
    failure_result?: boolean;
};

