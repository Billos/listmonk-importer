/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SystemTask } from './SystemTask';
/**
 * Kerberos Source sync status
 */
export type KerberosSyncStatus = {
    readonly is_running: boolean;
    readonly tasks: Array<SystemTask>;
};

