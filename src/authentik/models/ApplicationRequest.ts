/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PolicyEngineMode } from './PolicyEngineMode';
/**
 * Application Serializer
 */
export type ApplicationRequest = {
    /**
     * Application's display Name.
     */
    name: string;
    /**
     * Internal application name, used in URLs.
     */
    slug: string;
    provider?: number | null;
    backchannel_providers?: Array<number>;
    /**
     * Open launch URL in a new browser tab or window.
     */
    open_in_new_tab?: boolean;
    meta_launch_url?: string;
    meta_description?: string;
    meta_publisher?: string;
    policy_engine_mode?: PolicyEngineMode;
    group?: string;
};

