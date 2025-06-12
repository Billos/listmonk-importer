/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Password Expiry Policy Serializer
 */
export type PatchedPasswordExpiryPolicyRequest = {
    name?: string;
    /**
     * When this option is enabled, all executions of this policy will be logged. By default, only execution errors are logged.
     */
    execution_logging?: boolean;
    days?: number;
    deny_only?: boolean;
};

