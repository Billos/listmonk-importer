/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EventActions } from './EventActions';
/**
 * Event Serializer
 */
export type Event = {
    readonly pk: string;
    user?: any;
    action: EventActions;
    app: string;
    context?: any;
    client_ip?: string | null;
    readonly created: string;
    expires?: string;
    brand?: any;
};

