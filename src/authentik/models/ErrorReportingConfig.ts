/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Config for error reporting
 */
export type ErrorReportingConfig = {
    readonly enabled: boolean;
    readonly sentry_dsn: string;
    readonly environment: string;
    readonly send_pii: boolean;
    readonly traces_sample_rate: number;
};

