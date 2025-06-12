/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { InitialPermissionsModeEnum } from './InitialPermissionsModeEnum';
/**
 * InitialPermissions serializer
 */
export type PatchedInitialPermissionsRequest = {
    name?: string;
    mode?: InitialPermissionsModeEnum;
    role?: string;
    permissions?: Array<number>;
};

