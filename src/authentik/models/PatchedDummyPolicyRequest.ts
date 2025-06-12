/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Dummy Policy Serializer
 */
export type PatchedDummyPolicyRequest = {
    name?: string;
    /**
     * When this option is enabled, all executions of this policy will be logged. By default, only execution errors are logged.
     */
    execution_logging?: boolean;
    result?: boolean;
    wait_min?: number;
    wait_max?: number;
};

