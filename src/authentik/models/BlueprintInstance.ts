/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BlueprintInstanceStatusEnum } from './BlueprintInstanceStatusEnum';
/**
 * Info about a single blueprint instance file
 */
export type BlueprintInstance = {
    readonly pk: string;
    name: string;
    path?: string;
    context?: any;
    readonly last_applied: string;
    readonly last_applied_hash: string;
    readonly status: BlueprintInstanceStatusEnum;
    enabled?: boolean;
    readonly managed_models: Array<string>;
    readonly metadata: any;
    content?: string;
};

