/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DeliveryMethodEnum } from './DeliveryMethodEnum';
import type { EventsRequestedEnum } from './EventsRequestedEnum';
import type { SSFProvider } from './SSFProvider';
/**
 * SSFStream Serializer
 */
export type SSFStream = {
    readonly pk: string;
    provider: number;
    readonly provider_obj: SSFProvider;
    delivery_method: DeliveryMethodEnum;
    endpoint_url?: string | null;
    events_requested?: Array<EventsRequestedEnum>;
    format: string;
    aud?: Array<string>;
    iss: string;
};

