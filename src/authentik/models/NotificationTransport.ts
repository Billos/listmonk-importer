/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NotificationTransportModeEnum } from './NotificationTransportModeEnum';
/**
 * NotificationTransport Serializer
 */
export type NotificationTransport = {
    readonly pk: string;
    name: string;
    mode?: NotificationTransportModeEnum;
    /**
     * Return selected mode with a UI Label
     */
    readonly mode_verbose: string;
    webhook_url?: string;
    /**
     * Customize the body of the request. Mapping should return data that is JSON-serializable.
     */
    webhook_mapping_body?: string | null;
    /**
     * Configure additional headers to be sent. Mapping should return a dictionary of key-value pairs
     */
    webhook_mapping_headers?: string | null;
    /**
     * Only send notification once, for example when sending a webhook into a chat channel.
     */
    send_once?: boolean;
};

