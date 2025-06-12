/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Source } from './Source';
/**
 * User source connection
 */
export type UserSourceConnection = {
    readonly pk: number;
    user: number;
    source: string;
    readonly source_obj: Source;
    identifier: string;
    readonly created: string;
    readonly last_updated: string;
};

