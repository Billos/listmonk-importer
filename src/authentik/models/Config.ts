/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CapabilitiesEnum } from './CapabilitiesEnum';
import type { ErrorReportingConfig } from './ErrorReportingConfig';
/**
 * Serialize authentik Config into DRF Object
 */
export type Config = {
    error_reporting: ErrorReportingConfig;
    capabilities: Array<CapabilitiesEnum>;
    cache_timeout: number;
    cache_timeout_flows: number;
    cache_timeout_policies: number;
    cache_timeout_reputation: number;
};

