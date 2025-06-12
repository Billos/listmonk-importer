/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Event } from './Event';
import type { SeverityEnum } from './SeverityEnum';
/**
 * Notification Serializer
 */
export type Notification = {
    readonly pk: string;
    readonly severity: SeverityEnum;
    readonly body: string;
    readonly created: string;
    event?: Event;
    seen?: boolean;
};

