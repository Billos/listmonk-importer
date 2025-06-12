/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * PolicyBindingSerializer which does not require target as target is set implicitly
 */
export type TransactionPolicyBindingRequest = {
    policy?: string | null;
    group?: string | null;
    user?: number | null;
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

