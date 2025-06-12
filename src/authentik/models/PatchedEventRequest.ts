/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EventActions } from './EventActions';
/**
 * Event Serializer
 */
export type PatchedEventRequest = {
    user?: any;
    action?: EventActions;
    app?: string;
    context?: any;
    client_ip?: string | null;
    expires?: string;
    brand?: any;
};

