/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SeverityEnum } from './SeverityEnum';
/**
 * NotificationRule Serializer
 */
export type PatchedNotificationRuleRequest = {
    name?: string;
    /**
     * Select which transports should be used to notify the user. If none are selected, the notification will only be shown in the authentik UI.
     */
    transports?: Array<string>;
    /**
     * Controls which severity level the created notifications will have.
     */
    severity?: SeverityEnum;
    /**
     * Define which group of users this notification should be sent and shown to. If left empty, Notification won't ben sent.
     */
    group?: string | null;
};

