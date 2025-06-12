/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PolicyEngineMode } from './PolicyEngineMode';
import type { Provider } from './Provider';
/**
 * Application Serializer
 */
export type Application = {
    readonly pk: string;
    /**
     * Application's display Name.
     */
    name: string;
    /**
     * Internal application name, used in URLs.
     */
    slug: string;
    provider?: number | null;
    readonly provider_obj: Provider;
    backchannel_providers?: Array<number>;
    readonly backchannel_providers_obj: Array<Provider>;
    /**
     * Allow formatting of launch URL
     */
    readonly launch_url: string | null;
    /**
     * Open launch URL in a new browser tab or window.
     */
    open_in_new_tab?: boolean;
    meta_launch_url?: string;
    /**
     * Get the URL to the App Icon image. If the name is /static or starts with http
     * it is returned as-is
     */
    readonly meta_icon: string | null;
    meta_description?: string;
    meta_publisher?: string;
    policy_engine_mode?: PolicyEngineMode;
    group?: string;
};

