/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * PolicyBinding Serializer
 */
export type PatchedPolicyBindingRequest = {
    policy?: string | null;
    group?: string | null;
    user?: number | null;
    target?: string;
    /**
     * Negates the outcome of the policy. Messages are unaffected.
     */
    negate?: boolean;
    enabled?: boolean;
    order?: number;
    /**
     * Timeout after which Policy execution is terminated.
     */
    timeout?: number;
    /**
     * Result if the Policy execution fails.
     */
    failure_result?: boolean;
};

