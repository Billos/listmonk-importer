/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Coordinate } from '../models/Coordinate';
import type { Event } from '../models/Event';
import type { EventRequest } from '../models/EventRequest';
import type { EventTopPerUser } from '../models/EventTopPerUser';
import type { Notification } from '../models/Notification';
import type { NotificationRequest } from '../models/NotificationRequest';
import type { NotificationRule } from '../models/NotificationRule';
import type { NotificationRuleRequest } from '../models/NotificationRuleRequest';
import type { NotificationTransport } from '../models/NotificationTransport';
import type { NotificationTransportRequest } from '../models/NotificationTransportRequest';
import type { NotificationTransportTest } from '../models/NotificationTransportTest';
import type { PaginatedEventList } from '../models/PaginatedEventList';
import type { PaginatedNotificationList } from '../models/PaginatedNotificationList';
import type { PaginatedNotificationRuleList } from '../models/PaginatedNotificationRuleList';
import type { PaginatedNotificationTransportList } from '../models/PaginatedNotificationTransportList';
import type { PaginatedSystemTaskList } from '../models/PaginatedSystemTaskList';
import type { PatchedEventRequest } from '../models/PatchedEventRequest';
import type { PatchedNotificationRequest } from '../models/PatchedNotificationRequest';
import type { PatchedNotificationRuleRequest } from '../models/PatchedNotificationRuleRequest';
import type { PatchedNotificationTransportRequest } from '../models/PatchedNotificationTransportRequest';
import type { SystemTask } from '../models/SystemTask';
import type { TypeCreate } from '../models/TypeCreate';
import type { UsedBy } from '../models/UsedBy';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class EventsService {
    /**
     * Event Read-Only Viewset
     * @param action
     * @param brandName Brand name
     * @param clientIp
     * @param contextAuthorizedApp Context Authorized application
     * @param contextModelApp Context Model App
     * @param contextModelName Context Model Name
     * @param contextModelPk Context Model Primary Key
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param search A search term.
     * @param username Username
     * @returns PaginatedEventList
     * @throws ApiError
     */
    public static eventsEventsList(
        action?: string,
        brandName?: string,
        clientIp?: string,
        contextAuthorizedApp?: string,
        contextModelApp?: string,
        contextModelName?: string,
        contextModelPk?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        search?: string,
        username?: string,
    ): CancelablePromise<PaginatedEventList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/events/events/',
            query: {
                'action': action,
                'brand_name': brandName,
                'client_ip': clientIp,
                'context_authorized_app': contextAuthorizedApp,
                'context_model_app': contextModelApp,
                'context_model_name': contextModelName,
                'context_model_pk': contextModelPk,
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'search': search,
                'username': username,
            },
        });
    }
    /**
     * Event Read-Only Viewset
     * @param requestBody
     * @returns Event
     * @throws ApiError
     */
    public static eventsEventsCreate(
        requestBody: EventRequest,
    ): CancelablePromise<Event> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/events/events/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Event Read-Only Viewset
     * @param eventUuid A UUID string identifying this Event.
     * @returns Event
     * @throws ApiError
     */
    public static eventsEventsRetrieve(
        eventUuid: string,
    ): CancelablePromise<Event> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/events/events/{event_uuid}/',
            path: {
                'event_uuid': eventUuid,
            },
        });
    }
    /**
     * Event Read-Only Viewset
     * @param eventUuid A UUID string identifying this Event.
     * @param requestBody
     * @returns Event
     * @throws ApiError
     */
    public static eventsEventsUpdate(
        eventUuid: string,
        requestBody: EventRequest,
    ): CancelablePromise<Event> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/events/events/{event_uuid}/',
            path: {
                'event_uuid': eventUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Event Read-Only Viewset
     * @param eventUuid A UUID string identifying this Event.
     * @param requestBody
     * @returns Event
     * @throws ApiError
     */
    public static eventsEventsPartialUpdate(
        eventUuid: string,
        requestBody?: PatchedEventRequest,
    ): CancelablePromise<Event> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/events/events/{event_uuid}/',
            path: {
                'event_uuid': eventUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Event Read-Only Viewset
     * @param eventUuid A UUID string identifying this Event.
     * @returns void
     * @throws ApiError
     */
    public static eventsEventsDestroy(
        eventUuid: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/events/events/{event_uuid}/',
            path: {
                'event_uuid': eventUuid,
            },
        });
    }
    /**
     * Get all actions
     * @returns TypeCreate
     * @throws ApiError
     */
    public static eventsEventsActionsList(): CancelablePromise<Array<TypeCreate>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/events/events/actions/',
        });
    }
    /**
     * Get the count of events per month
     * @param action
     * @param query
     * @returns Coordinate
     * @throws ApiError
     */
    public static eventsEventsPerMonthList(
        action?: string,
        query?: string,
    ): CancelablePromise<Array<Coordinate>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/events/events/per_month/',
            query: {
                'action': action,
                'query': query,
            },
        });
    }
    /**
     * Get the top_n events grouped by user count
     * @param action
     * @param topN
     * @returns EventTopPerUser
     * @throws ApiError
     */
    public static eventsEventsTopPerUserList(
        action?: string,
        topN?: number,
    ): CancelablePromise<Array<EventTopPerUser>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/events/events/top_per_user/',
            query: {
                'action': action,
                'top_n': topN,
            },
        });
    }
    /**
     * Get event volume for specified filters and timeframe
     * @param action
     * @param brandName Brand name
     * @param clientIp
     * @param contextAuthorizedApp Context Authorized application
     * @param contextModelApp Context Model App
     * @param contextModelName Context Model Name
     * @param contextModelPk Context Model Primary Key
     * @param ordering Which field to use when ordering the results.
     * @param search A search term.
     * @param username Username
     * @returns Coordinate
     * @throws ApiError
     */
    public static eventsEventsVolumeList(
        action?: string,
        brandName?: string,
        clientIp?: string,
        contextAuthorizedApp?: string,
        contextModelApp?: string,
        contextModelName?: string,
        contextModelPk?: string,
        ordering?: string,
        search?: string,
        username?: string,
    ): CancelablePromise<Array<Coordinate>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/events/events/volume/',
            query: {
                'action': action,
                'brand_name': brandName,
                'client_ip': clientIp,
                'context_authorized_app': contextAuthorizedApp,
                'context_model_app': contextModelApp,
                'context_model_name': contextModelName,
                'context_model_pk': contextModelPk,
                'ordering': ordering,
                'search': search,
                'username': username,
            },
        });
    }
    /**
     * Notification Viewset
     * @param body
     * @param created
     * @param event
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param search A search term.
     * @param seen
     * @param severity
     * @param user
     * @returns PaginatedNotificationList
     * @throws ApiError
     */
    public static eventsNotificationsList(
        body?: string,
        created?: string,
        event?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        search?: string,
        seen?: boolean,
        severity?: 'alert' | 'notice' | 'warning',
        user?: number,
    ): CancelablePromise<PaginatedNotificationList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/events/notifications/',
            query: {
                'body': body,
                'created': created,
                'event': event,
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'search': search,
                'seen': seen,
                'severity': severity,
                'user': user,
            },
        });
    }
    /**
     * Notification Viewset
     * @param uuid A UUID string identifying this Notification.
     * @returns Notification
     * @throws ApiError
     */
    public static eventsNotificationsRetrieve(
        uuid: string,
    ): CancelablePromise<Notification> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/events/notifications/{uuid}/',
            path: {
                'uuid': uuid,
            },
        });
    }
    /**
     * Notification Viewset
     * @param uuid A UUID string identifying this Notification.
     * @param requestBody
     * @returns Notification
     * @throws ApiError
     */
    public static eventsNotificationsUpdate(
        uuid: string,
        requestBody?: NotificationRequest,
    ): CancelablePromise<Notification> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/events/notifications/{uuid}/',
            path: {
                'uuid': uuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Notification Viewset
     * @param uuid A UUID string identifying this Notification.
     * @param requestBody
     * @returns Notification
     * @throws ApiError
     */
    public static eventsNotificationsPartialUpdate(
        uuid: string,
        requestBody?: PatchedNotificationRequest,
    ): CancelablePromise<Notification> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/events/notifications/{uuid}/',
            path: {
                'uuid': uuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Notification Viewset
     * @param uuid A UUID string identifying this Notification.
     * @returns void
     * @throws ApiError
     */
    public static eventsNotificationsDestroy(
        uuid: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/events/notifications/{uuid}/',
            path: {
                'uuid': uuid,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param uuid A UUID string identifying this Notification.
     * @returns UsedBy
     * @throws ApiError
     */
    public static eventsNotificationsUsedByList(
        uuid: string,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/events/notifications/{uuid}/used_by/',
            path: {
                'uuid': uuid,
            },
        });
    }
    /**
     * Mark all the user's notifications as seen
     * @returns void
     * @throws ApiError
     */
    public static eventsNotificationsMarkAllSeenCreate(): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/events/notifications/mark_all_seen/',
        });
    }
    /**
     * NotificationRule Viewset
     * @param groupName
     * @param name
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param search A search term.
     * @param severity Controls which severity level the created notifications will have.
     *
     *
     * @returns PaginatedNotificationRuleList
     * @throws ApiError
     */
    public static eventsRulesList(
        groupName?: string,
        name?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        search?: string,
        severity?: 'alert' | 'notice' | 'warning',
    ): CancelablePromise<PaginatedNotificationRuleList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/events/rules/',
            query: {
                'group__name': groupName,
                'name': name,
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'search': search,
                'severity': severity,
            },
        });
    }
    /**
     * NotificationRule Viewset
     * @param requestBody
     * @returns NotificationRule
     * @throws ApiError
     */
    public static eventsRulesCreate(
        requestBody: NotificationRuleRequest,
    ): CancelablePromise<NotificationRule> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/events/rules/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * NotificationRule Viewset
     * @param pbmUuid A UUID string identifying this Notification Rule.
     * @returns NotificationRule
     * @throws ApiError
     */
    public static eventsRulesRetrieve(
        pbmUuid: string,
    ): CancelablePromise<NotificationRule> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/events/rules/{pbm_uuid}/',
            path: {
                'pbm_uuid': pbmUuid,
            },
        });
    }
    /**
     * NotificationRule Viewset
     * @param pbmUuid A UUID string identifying this Notification Rule.
     * @param requestBody
     * @returns NotificationRule
     * @throws ApiError
     */
    public static eventsRulesUpdate(
        pbmUuid: string,
        requestBody: NotificationRuleRequest,
    ): CancelablePromise<NotificationRule> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/events/rules/{pbm_uuid}/',
            path: {
                'pbm_uuid': pbmUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * NotificationRule Viewset
     * @param pbmUuid A UUID string identifying this Notification Rule.
     * @param requestBody
     * @returns NotificationRule
     * @throws ApiError
     */
    public static eventsRulesPartialUpdate(
        pbmUuid: string,
        requestBody?: PatchedNotificationRuleRequest,
    ): CancelablePromise<NotificationRule> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/events/rules/{pbm_uuid}/',
            path: {
                'pbm_uuid': pbmUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * NotificationRule Viewset
     * @param pbmUuid A UUID string identifying this Notification Rule.
     * @returns void
     * @throws ApiError
     */
    public static eventsRulesDestroy(
        pbmUuid: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/events/rules/{pbm_uuid}/',
            path: {
                'pbm_uuid': pbmUuid,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param pbmUuid A UUID string identifying this Notification Rule.
     * @returns UsedBy
     * @throws ApiError
     */
    public static eventsRulesUsedByList(
        pbmUuid: string,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/events/rules/{pbm_uuid}/used_by/',
            path: {
                'pbm_uuid': pbmUuid,
            },
        });
    }
    /**
     * Read-only view set that returns all background tasks
     * @param name
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param search A search term.
     * @param status
     * @param uid
     * @returns PaginatedSystemTaskList
     * @throws ApiError
     */
    public static eventsSystemTasksList(
        name?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        search?: string,
        status?: 'error' | 'successful' | 'unknown' | 'warning',
        uid?: string,
    ): CancelablePromise<PaginatedSystemTaskList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/events/system_tasks/',
            query: {
                'name': name,
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'search': search,
                'status': status,
                'uid': uid,
            },
        });
    }
    /**
     * Read-only view set that returns all background tasks
     * @param uuid A UUID string identifying this System Task.
     * @returns SystemTask
     * @throws ApiError
     */
    public static eventsSystemTasksRetrieve(
        uuid: string,
    ): CancelablePromise<SystemTask> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/events/system_tasks/{uuid}/',
            path: {
                'uuid': uuid,
            },
        });
    }
    /**
     * Run task
     * @param uuid A UUID string identifying this System Task.
     * @returns void
     * @throws ApiError
     */
    public static eventsSystemTasksRunCreate(
        uuid: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/events/system_tasks/{uuid}/run/',
            path: {
                'uuid': uuid,
            },
            errors: {
                404: `Task not found`,
                500: `Failed to retry task`,
            },
        });
    }
    /**
     * NotificationTransport Viewset
     * @param mode
     * @param name
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param search A search term.
     * @param sendOnce
     * @param webhookUrl
     * @returns PaginatedNotificationTransportList
     * @throws ApiError
     */
    public static eventsTransportsList(
        mode?: 'email' | 'local' | 'webhook' | 'webhook_slack',
        name?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        search?: string,
        sendOnce?: boolean,
        webhookUrl?: string,
    ): CancelablePromise<PaginatedNotificationTransportList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/events/transports/',
            query: {
                'mode': mode,
                'name': name,
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'search': search,
                'send_once': sendOnce,
                'webhook_url': webhookUrl,
            },
        });
    }
    /**
     * NotificationTransport Viewset
     * @param requestBody
     * @returns NotificationTransport
     * @throws ApiError
     */
    public static eventsTransportsCreate(
        requestBody: NotificationTransportRequest,
    ): CancelablePromise<NotificationTransport> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/events/transports/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * NotificationTransport Viewset
     * @param uuid A UUID string identifying this Notification Transport.
     * @returns NotificationTransport
     * @throws ApiError
     */
    public static eventsTransportsRetrieve(
        uuid: string,
    ): CancelablePromise<NotificationTransport> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/events/transports/{uuid}/',
            path: {
                'uuid': uuid,
            },
        });
    }
    /**
     * NotificationTransport Viewset
     * @param uuid A UUID string identifying this Notification Transport.
     * @param requestBody
     * @returns NotificationTransport
     * @throws ApiError
     */
    public static eventsTransportsUpdate(
        uuid: string,
        requestBody: NotificationTransportRequest,
    ): CancelablePromise<NotificationTransport> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/events/transports/{uuid}/',
            path: {
                'uuid': uuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * NotificationTransport Viewset
     * @param uuid A UUID string identifying this Notification Transport.
     * @param requestBody
     * @returns NotificationTransport
     * @throws ApiError
     */
    public static eventsTransportsPartialUpdate(
        uuid: string,
        requestBody?: PatchedNotificationTransportRequest,
    ): CancelablePromise<NotificationTransport> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/events/transports/{uuid}/',
            path: {
                'uuid': uuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * NotificationTransport Viewset
     * @param uuid A UUID string identifying this Notification Transport.
     * @returns void
     * @throws ApiError
     */
    public static eventsTransportsDestroy(
        uuid: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/events/transports/{uuid}/',
            path: {
                'uuid': uuid,
            },
        });
    }
    /**
     * Send example notification using selected transport. Requires
     * Modify permissions.
     * @param uuid A UUID string identifying this Notification Transport.
     * @returns NotificationTransportTest
     * @throws ApiError
     */
    public static eventsTransportsTestCreate(
        uuid: string,
    ): CancelablePromise<NotificationTransportTest> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/events/transports/{uuid}/test/',
            path: {
                'uuid': uuid,
            },
            errors: {
                500: `Failed to test transport`,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param uuid A UUID string identifying this Notification Transport.
     * @returns UsedBy
     * @throws ApiError
     */
    public static eventsTransportsUsedByList(
        uuid: string,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/events/transports/{uuid}/used_by/',
            path: {
                'uuid': uuid,
            },
        });
    }
}
