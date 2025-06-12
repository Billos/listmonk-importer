/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RoleObjectPermission } from './RoleObjectPermission';
/**
 * Roles assigned object permission serializer
 */
export type RoleAssignedObjectPermission = {
    readonly role_pk: string;
    readonly name: string;
    permissions: Array<RoleObjectPermission>;
};

