/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Source } from './Source';
/**
 * Group Source Connection
 */
export type GroupSAMLSourceConnection = {
    readonly pk: number;
    group: string;
    source: string;
    readonly source_obj: Source;
    identifier: string;
    readonly created: string;
    readonly last_updated: string;
};

