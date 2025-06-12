/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { InitialPermissionsModeEnum } from './InitialPermissionsModeEnum';
import type { Permission } from './Permission';
/**
 * InitialPermissions serializer
 */
export type InitialPermissions = {
    readonly pk: number;
    name: string;
    mode: InitialPermissionsModeEnum;
    role: string;
    permissions?: Array<number>;
    readonly permissions_obj: Array<Permission>;
};

