/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Password Uniqueness Policy Serializer
 */
export type UniquePasswordPolicy = {
    readonly pk: string;
    name: string;
    /**
     * When this option is enabled, all executions of this policy will be logged. By default, only execution errors are logged.
     */
    execution_logging?: boolean;
    /**
     * Get object component so that we know how to edit the object
     */
    readonly component: string;
    /**
     * Return object's verbose_name
     */
    readonly verbose_name: string;
    /**
     * Return object's plural verbose_name
     */
    readonly verbose_name_plural: string;
    /**
     * Return internal model name
     */
    readonly meta_model_name: string;
    /**
     * Return objects policy is bound to
     */
    readonly bound_to: number;
    /**
     * Field key to check, field keys defined in Prompt stages are available.
     */
    password_field?: string;
    /**
     * Number of passwords to check against.
     */
    num_historical_passwords?: number;
};

