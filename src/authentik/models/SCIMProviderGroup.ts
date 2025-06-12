/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserGroup } from './UserGroup';
/**
 * SCIMProviderGroup Serializer
 */
export type SCIMProviderGroup = {
    readonly id: string;
    scim_id: string;
    group: string;
    readonly group_obj: UserGroup;
    provider: number;
    readonly attributes: any;
};

