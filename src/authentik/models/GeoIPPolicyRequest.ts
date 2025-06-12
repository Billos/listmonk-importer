/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CountryCodeEnum } from './CountryCodeEnum';
/**
 * GeoIP Policy Serializer
 */
export type GeoIPPolicyRequest = {
    name: string;
    /**
     * When this option is enabled, all executions of this policy will be logged. By default, only execution errors are logged.
     */
    execution_logging?: boolean;
    asns?: Array<number>;
    countries: Array<CountryCodeEnum>;
    check_history_distance?: boolean;
    history_max_distance_km?: number;
    distance_tolerance_km?: number;
    history_login_count?: number;
    check_impossible_travel?: boolean;
    impossible_tolerance_km?: number;
};

