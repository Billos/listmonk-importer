/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Token } from './Token';
/**
 * SSFProvider Serializer
 */
export type SSFProvider = {
    readonly pk: number;
    name: string;
    /**
     * Get object component so that we know how to edit the object
     */
    readonly component: string;
    /**
     * Return object's verbose_name
     */
    readonly verbose_name: string;
    /**
     * Return object's plural verbose_name
     */
    readonly verbose_name_plural: string;
    /**
     * Return internal model name
     */
    readonly meta_model_name: string;
    /**
     * Key used to sign the SSF Events.
     */
    signing_key: string;
    readonly token_obj: Token;
    oidc_auth_providers?: Array<number>;
    readonly ssf_url: string | null;
    event_retention?: string;
};

