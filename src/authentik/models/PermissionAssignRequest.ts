/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ModelEnum } from './ModelEnum';
/**
 * Request to assign a new permission
 */
export type PermissionAssignRequest = {
    permissions: Array<string>;
    model?: ModelEnum;
    object_pk?: string;
};

