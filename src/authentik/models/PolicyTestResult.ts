/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LogEvent } from './LogEvent';
/**
 * result of a policy test
 */
export type PolicyTestResult = {
    passing: boolean;
    readonly messages: Array<string>;
    readonly log_messages: Array<LogEvent>;
};

