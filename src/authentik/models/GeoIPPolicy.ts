/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CountryCodeEnum } from './CountryCodeEnum';
import type { DetailedCountryField } from './DetailedCountryField';
/**
 * GeoIP Policy Serializer
 */
export type GeoIPPolicy = {
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
    asns?: Array<number>;
    countries: Array<CountryCodeEnum>;
    readonly countries_obj: Array<DetailedCountryField>;
    check_history_distance?: boolean;
    history_max_distance_km?: number;
    distance_tolerance_km?: number;
    history_login_count?: number;
    check_impossible_travel?: boolean;
    impossible_tolerance_km?: number;
};

