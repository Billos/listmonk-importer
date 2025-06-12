/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Reputation Policy Serializer
 */
export type ReputationPolicyRequest = {
    name: string;
    /**
     * When this option is enabled, all executions of this policy will be logged. By default, only execution errors are logged.
     */
    execution_logging?: boolean;
    check_ip?: boolean;
    check_username?: boolean;
    threshold?: number;
};

