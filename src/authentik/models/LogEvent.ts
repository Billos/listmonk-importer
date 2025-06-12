/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LogLevelEnum } from './LogLevelEnum';
/**
 * Single log message with all context logged.
 */
export type LogEvent = {
    timestamp: string;
    log_level: LogLevelEnum;
    logger: string;
    event: string;
    attributes: Record<string, any>;
};

