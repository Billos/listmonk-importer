/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Password Policy Serializer
 */
export type PatchedPasswordPolicyRequest = {
    name?: string;
    /**
     * When this option is enabled, all executions of this policy will be logged. By default, only execution errors are logged.
     */
    execution_logging?: boolean;
    /**
     * Field key to check, field keys defined in Prompt stages are available.
     */
    password_field?: string;
    amount_digits?: number;
    amount_uppercase?: number;
    amount_lowercase?: number;
    amount_symbols?: number;
    length_min?: number;
    symbol_charset?: string;
    error_message?: string;
    check_static_rules?: boolean;
    check_have_i_been_pwned?: boolean;
    check_zxcvbn?: boolean;
    /**
     * How many times the password hash is allowed to be on haveibeenpwned
     */
    hibp_allowed_count?: number;
    /**
     * If the zxcvbn score is equal or less than this value, the policy will fail.
     */
    zxcvbn_score_threshold?: number;
};

