/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LogEvent } from './LogEvent';
import type { SystemTaskStatusEnum } from './SystemTaskStatusEnum';
/**
 * Serialize TaskInfo and TaskResult
 */
export type SystemTask = {
    readonly uuid: string;
    name: string;
    /**
     * Get full name with UID
     */
    readonly full_name: string;
    uid?: string;
    description: string;
    readonly start_timestamp: string;
    readonly finish_timestamp: string;
    readonly duration: number;
    status: SystemTaskStatusEnum;
    messages: Array<LogEvent>;
    expires?: string | null;
    expiring?: boolean;
};

