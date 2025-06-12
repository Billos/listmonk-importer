/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Password Uniqueness Policy Serializer
 */
export type UniquePasswordPolicyRequest = {
    name: string;
    /**
     * When this option is enabled, all executions of this policy will be logged. By default, only execution errors are logged.
     */
    execution_logging?: boolean;
    /**
     * Field key to check, field keys defined in Prompt stages are available.
     */
    password_field?: string;
    /**
     * Number of passwords to check against.
     */
    num_historical_passwords?: number;
};

