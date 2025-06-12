/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OutpostTypeEnum } from './OutpostTypeEnum';
/**
 * Outpost Serializer
 */
export type PatchedOutpostRequest = {
    name?: string;
    type?: OutpostTypeEnum;
    providers?: Array<number>;
    /**
     * Select Service-Connection authentik should use to manage this outpost. Leave empty if authentik should not handle the deployment.
     */
    service_connection?: string | null;
    config?: Record<string, any>;
    /**
     * Objects that are managed by authentik. These objects are created and updated automatically. This flag only indicates that an object can be overwritten by migrations. You can still modify the objects via the API, but expect changes to be overwritten in a later update.
     */
    managed?: string | null;
};

