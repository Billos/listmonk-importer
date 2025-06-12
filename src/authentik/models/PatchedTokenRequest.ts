/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IntentEnum } from './IntentEnum';
/**
 * Token Serializer
 */
export type PatchedTokenRequest = {
    /**
     * Objects that are managed by authentik. These objects are created and updated automatically. This flag only indicates that an object can be overwritten by migrations. You can still modify the objects via the API, but expect changes to be overwritten in a later update.
     */
    managed?: string | null;
    identifier?: string;
    intent?: IntentEnum;
    user?: number;
    description?: string;
    expires?: string | null;
    expiring?: boolean;
};

