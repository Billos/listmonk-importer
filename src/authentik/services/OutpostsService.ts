/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DockerServiceConnection } from '../models/DockerServiceConnection';
import type { DockerServiceConnectionRequest } from '../models/DockerServiceConnectionRequest';
import type { KubernetesServiceConnection } from '../models/KubernetesServiceConnection';
import type { KubernetesServiceConnectionRequest } from '../models/KubernetesServiceConnectionRequest';
import type { LDAPCheckAccess } from '../models/LDAPCheckAccess';
import type { Outpost } from '../models/Outpost';
import type { OutpostDefaultConfig } from '../models/OutpostDefaultConfig';
import type { OutpostHealth } from '../models/OutpostHealth';
import type { OutpostRequest } from '../models/OutpostRequest';
import type { PaginatedDockerServiceConnectionList } from '../models/PaginatedDockerServiceConnectionList';
import type { PaginatedKubernetesServiceConnectionList } from '../models/PaginatedKubernetesServiceConnectionList';
import type { PaginatedLDAPOutpostConfigList } from '../models/PaginatedLDAPOutpostConfigList';
import type { PaginatedOutpostList } from '../models/PaginatedOutpostList';
import type { PaginatedProxyOutpostConfigList } from '../models/PaginatedProxyOutpostConfigList';
import type { PaginatedRadiusOutpostConfigList } from '../models/PaginatedRadiusOutpostConfigList';
import type { PaginatedServiceConnectionList } from '../models/PaginatedServiceConnectionList';
import type { PatchedDockerServiceConnectionRequest } from '../models/PatchedDockerServiceConnectionRequest';
import type { PatchedKubernetesServiceConnectionRequest } from '../models/PatchedKubernetesServiceConnectionRequest';
import type { PatchedOutpostRequest } from '../models/PatchedOutpostRequest';
import type { RadiusCheckAccess } from '../models/RadiusCheckAccess';
import type { ServiceConnection } from '../models/ServiceConnection';
import type { ServiceConnectionState } from '../models/ServiceConnectionState';
import type { TypeCreate } from '../models/TypeCreate';
import type { UsedBy } from '../models/UsedBy';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class OutpostsService {
    /**
     * Outpost Viewset
     * @param managedIcontains
     * @param managedIexact
     * @param nameIcontains
     * @param nameIexact
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param providersIsnull
     * @param providersByPk
     * @param search A search term.
     * @param serviceConnectionNameIcontains
     * @param serviceConnectionNameIexact
     * @returns PaginatedOutpostList
     * @throws ApiError
     */
    public static outpostsInstancesList(
        managedIcontains?: string,
        managedIexact?: string,
        nameIcontains?: string,
        nameIexact?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        providersIsnull?: boolean,
        providersByPk?: Array<number>,
        search?: string,
        serviceConnectionNameIcontains?: string,
        serviceConnectionNameIexact?: string,
    ): CancelablePromise<PaginatedOutpostList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/outposts/instances/',
            query: {
                'managed__icontains': managedIcontains,
                'managed__iexact': managedIexact,
                'name__icontains': nameIcontains,
                'name__iexact': nameIexact,
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'providers__isnull': providersIsnull,
                'providers_by_pk': providersByPk,
                'search': search,
                'service_connection__name__icontains': serviceConnectionNameIcontains,
                'service_connection__name__iexact': serviceConnectionNameIexact,
            },
        });
    }
    /**
     * Outpost Viewset
     * @param requestBody
     * @returns Outpost
     * @throws ApiError
     */
    public static outpostsInstancesCreate(
        requestBody: OutpostRequest,
    ): CancelablePromise<Outpost> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/outposts/instances/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Outpost Viewset
     * @param uuid A UUID string identifying this Outpost.
     * @returns Outpost
     * @throws ApiError
     */
    public static outpostsInstancesRetrieve(
        uuid: string,
    ): CancelablePromise<Outpost> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/outposts/instances/{uuid}/',
            path: {
                'uuid': uuid,
            },
        });
    }
    /**
     * Outpost Viewset
     * @param uuid A UUID string identifying this Outpost.
     * @param requestBody
     * @returns Outpost
     * @throws ApiError
     */
    public static outpostsInstancesUpdate(
        uuid: string,
        requestBody: OutpostRequest,
    ): CancelablePromise<Outpost> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/outposts/instances/{uuid}/',
            path: {
                'uuid': uuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Outpost Viewset
     * @param uuid A UUID string identifying this Outpost.
     * @param requestBody
     * @returns Outpost
     * @throws ApiError
     */
    public static outpostsInstancesPartialUpdate(
        uuid: string,
        requestBody?: PatchedOutpostRequest,
    ): CancelablePromise<Outpost> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/outposts/instances/{uuid}/',
            path: {
                'uuid': uuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Outpost Viewset
     * @param uuid A UUID string identifying this Outpost.
     * @returns void
     * @throws ApiError
     */
    public static outpostsInstancesDestroy(
        uuid: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/outposts/instances/{uuid}/',
            path: {
                'uuid': uuid,
            },
        });
    }
    /**
     * Get outposts current health
     * @param uuid A UUID string identifying this Outpost.
     * @param managedIcontains
     * @param managedIexact
     * @param nameIcontains
     * @param nameIexact
     * @param ordering Which field to use when ordering the results.
     * @param providersIsnull
     * @param providersByPk
     * @param search A search term.
     * @param serviceConnectionNameIcontains
     * @param serviceConnectionNameIexact
     * @returns OutpostHealth
     * @throws ApiError
     */
    public static outpostsInstancesHealthList(
        uuid: string,
        managedIcontains?: string,
        managedIexact?: string,
        nameIcontains?: string,
        nameIexact?: string,
        ordering?: string,
        providersIsnull?: boolean,
        providersByPk?: Array<number>,
        search?: string,
        serviceConnectionNameIcontains?: string,
        serviceConnectionNameIexact?: string,
    ): CancelablePromise<Array<OutpostHealth>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/outposts/instances/{uuid}/health/',
            path: {
                'uuid': uuid,
            },
            query: {
                'managed__icontains': managedIcontains,
                'managed__iexact': managedIexact,
                'name__icontains': nameIcontains,
                'name__iexact': nameIexact,
                'ordering': ordering,
                'providers__isnull': providersIsnull,
                'providers_by_pk': providersByPk,
                'search': search,
                'service_connection__name__icontains': serviceConnectionNameIcontains,
                'service_connection__name__iexact': serviceConnectionNameIexact,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param uuid A UUID string identifying this Outpost.
     * @returns UsedBy
     * @throws ApiError
     */
    public static outpostsInstancesUsedByList(
        uuid: string,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/outposts/instances/{uuid}/used_by/',
            path: {
                'uuid': uuid,
            },
        });
    }
    /**
     * Global default outpost config
     * @returns OutpostDefaultConfig
     * @throws ApiError
     */
    public static outpostsInstancesDefaultSettingsRetrieve(): CancelablePromise<OutpostDefaultConfig> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/outposts/instances/default_settings/',
        });
    }
    /**
     * LDAPProvider Viewset
     * @param name
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param search A search term.
     * @returns PaginatedLDAPOutpostConfigList
     * @throws ApiError
     */
    public static outpostsLdapList(
        name?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        search?: string,
    ): CancelablePromise<PaginatedLDAPOutpostConfigList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/outposts/ldap/',
            query: {
                'name': name,
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'search': search,
            },
        });
    }
    /**
     * Check access to a single application by slug
     * @param id A unique integer value identifying this LDAP Provider.
     * @param appSlug
     * @returns LDAPCheckAccess
     * @throws ApiError
     */
    public static outpostsLdapAccessCheck(
        id: number,
        appSlug?: string,
    ): CancelablePromise<LDAPCheckAccess> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/outposts/ldap/{id}/check_access/',
            path: {
                'id': id,
            },
            query: {
                'app_slug': appSlug,
            },
        });
    }
    /**
     * ProxyProvider Viewset
     * @param name
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param search A search term.
     * @returns PaginatedProxyOutpostConfigList
     * @throws ApiError
     */
    public static outpostsProxyList(
        name?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        search?: string,
    ): CancelablePromise<PaginatedProxyOutpostConfigList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/outposts/proxy/',
            query: {
                'name': name,
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'search': search,
            },
        });
    }
    /**
     * RadiusProvider Viewset
     * @param name
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param search A search term.
     * @returns PaginatedRadiusOutpostConfigList
     * @throws ApiError
     */
    public static outpostsRadiusList(
        name?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        search?: string,
    ): CancelablePromise<PaginatedRadiusOutpostConfigList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/outposts/radius/',
            query: {
                'name': name,
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'search': search,
            },
        });
    }
    /**
     * Check access to a single application by slug
     * @param id A unique integer value identifying this Radius Provider.
     * @param appSlug
     * @returns RadiusCheckAccess
     * @throws ApiError
     */
    public static outpostsRadiusAccessCheck(
        id: number,
        appSlug?: string,
    ): CancelablePromise<RadiusCheckAccess> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/outposts/radius/{id}/check_access/',
            path: {
                'id': id,
            },
            query: {
                'app_slug': appSlug,
            },
        });
    }
    /**
     * ServiceConnection Viewset
     * @param name
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param search A search term.
     * @returns PaginatedServiceConnectionList
     * @throws ApiError
     */
    public static outpostsServiceConnectionsAllList(
        name?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        search?: string,
    ): CancelablePromise<PaginatedServiceConnectionList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/outposts/service_connections/all/',
            query: {
                'name': name,
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'search': search,
            },
        });
    }
    /**
     * ServiceConnection Viewset
     * @param uuid A UUID string identifying this Outpost Service-Connection.
     * @returns ServiceConnection
     * @throws ApiError
     */
    public static outpostsServiceConnectionsAllRetrieve(
        uuid: string,
    ): CancelablePromise<ServiceConnection> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/outposts/service_connections/all/{uuid}/',
            path: {
                'uuid': uuid,
            },
        });
    }
    /**
     * ServiceConnection Viewset
     * @param uuid A UUID string identifying this Outpost Service-Connection.
     * @returns void
     * @throws ApiError
     */
    public static outpostsServiceConnectionsAllDestroy(
        uuid: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/outposts/service_connections/all/{uuid}/',
            path: {
                'uuid': uuid,
            },
        });
    }
    /**
     * Get the service connection's state
     * @param uuid A UUID string identifying this Outpost Service-Connection.
     * @returns ServiceConnectionState
     * @throws ApiError
     */
    public static outpostsServiceConnectionsAllStateRetrieve(
        uuid: string,
    ): CancelablePromise<ServiceConnectionState> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/outposts/service_connections/all/{uuid}/state/',
            path: {
                'uuid': uuid,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param uuid A UUID string identifying this Outpost Service-Connection.
     * @returns UsedBy
     * @throws ApiError
     */
    public static outpostsServiceConnectionsAllUsedByList(
        uuid: string,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/outposts/service_connections/all/{uuid}/used_by/',
            path: {
                'uuid': uuid,
            },
        });
    }
    /**
     * Get all creatable types
     * @returns TypeCreate
     * @throws ApiError
     */
    public static outpostsServiceConnectionsAllTypesList(): CancelablePromise<Array<TypeCreate>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/outposts/service_connections/all/types/',
        });
    }
    /**
     * DockerServiceConnection Viewset
     * @param local
     * @param name
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param search A search term.
     * @param tlsAuthentication
     * @param tlsVerification
     * @param url
     * @returns PaginatedDockerServiceConnectionList
     * @throws ApiError
     */
    public static outpostsServiceConnectionsDockerList(
        local?: boolean,
        name?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        search?: string,
        tlsAuthentication?: string,
        tlsVerification?: string,
        url?: string,
    ): CancelablePromise<PaginatedDockerServiceConnectionList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/outposts/service_connections/docker/',
            query: {
                'local': local,
                'name': name,
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'search': search,
                'tls_authentication': tlsAuthentication,
                'tls_verification': tlsVerification,
                'url': url,
            },
        });
    }
    /**
     * DockerServiceConnection Viewset
     * @param requestBody
     * @returns DockerServiceConnection
     * @throws ApiError
     */
    public static outpostsServiceConnectionsDockerCreate(
        requestBody: DockerServiceConnectionRequest,
    ): CancelablePromise<DockerServiceConnection> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/outposts/service_connections/docker/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * DockerServiceConnection Viewset
     * @param uuid A UUID string identifying this Docker Service-Connection.
     * @returns DockerServiceConnection
     * @throws ApiError
     */
    public static outpostsServiceConnectionsDockerRetrieve(
        uuid: string,
    ): CancelablePromise<DockerServiceConnection> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/outposts/service_connections/docker/{uuid}/',
            path: {
                'uuid': uuid,
            },
        });
    }
    /**
     * DockerServiceConnection Viewset
     * @param uuid A UUID string identifying this Docker Service-Connection.
     * @param requestBody
     * @returns DockerServiceConnection
     * @throws ApiError
     */
    public static outpostsServiceConnectionsDockerUpdate(
        uuid: string,
        requestBody: DockerServiceConnectionRequest,
    ): CancelablePromise<DockerServiceConnection> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/outposts/service_connections/docker/{uuid}/',
            path: {
                'uuid': uuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * DockerServiceConnection Viewset
     * @param uuid A UUID string identifying this Docker Service-Connection.
     * @param requestBody
     * @returns DockerServiceConnection
     * @throws ApiError
     */
    public static outpostsServiceConnectionsDockerPartialUpdate(
        uuid: string,
        requestBody?: PatchedDockerServiceConnectionRequest,
    ): CancelablePromise<DockerServiceConnection> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/outposts/service_connections/docker/{uuid}/',
            path: {
                'uuid': uuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * DockerServiceConnection Viewset
     * @param uuid A UUID string identifying this Docker Service-Connection.
     * @returns void
     * @throws ApiError
     */
    public static outpostsServiceConnectionsDockerDestroy(
        uuid: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/outposts/service_connections/docker/{uuid}/',
            path: {
                'uuid': uuid,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param uuid A UUID string identifying this Docker Service-Connection.
     * @returns UsedBy
     * @throws ApiError
     */
    public static outpostsServiceConnectionsDockerUsedByList(
        uuid: string,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/outposts/service_connections/docker/{uuid}/used_by/',
            path: {
                'uuid': uuid,
            },
        });
    }
    /**
     * KubernetesServiceConnection Viewset
     * @param local
     * @param name
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param search A search term.
     * @returns PaginatedKubernetesServiceConnectionList
     * @throws ApiError
     */
    public static outpostsServiceConnectionsKubernetesList(
        local?: boolean,
        name?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        search?: string,
    ): CancelablePromise<PaginatedKubernetesServiceConnectionList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/outposts/service_connections/kubernetes/',
            query: {
                'local': local,
                'name': name,
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'search': search,
            },
        });
    }
    /**
     * KubernetesServiceConnection Viewset
     * @param requestBody
     * @returns KubernetesServiceConnection
     * @throws ApiError
     */
    public static outpostsServiceConnectionsKubernetesCreate(
        requestBody: KubernetesServiceConnectionRequest,
    ): CancelablePromise<KubernetesServiceConnection> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/outposts/service_connections/kubernetes/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * KubernetesServiceConnection Viewset
     * @param uuid A UUID string identifying this Kubernetes Service-Connection.
     * @returns KubernetesServiceConnection
     * @throws ApiError
     */
    public static outpostsServiceConnectionsKubernetesRetrieve(
        uuid: string,
    ): CancelablePromise<KubernetesServiceConnection> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/outposts/service_connections/kubernetes/{uuid}/',
            path: {
                'uuid': uuid,
            },
        });
    }
    /**
     * KubernetesServiceConnection Viewset
     * @param uuid A UUID string identifying this Kubernetes Service-Connection.
     * @param requestBody
     * @returns KubernetesServiceConnection
     * @throws ApiError
     */
    public static outpostsServiceConnectionsKubernetesUpdate(
        uuid: string,
        requestBody: KubernetesServiceConnectionRequest,
    ): CancelablePromise<KubernetesServiceConnection> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/outposts/service_connections/kubernetes/{uuid}/',
            path: {
                'uuid': uuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * KubernetesServiceConnection Viewset
     * @param uuid A UUID string identifying this Kubernetes Service-Connection.
     * @param requestBody
     * @returns KubernetesServiceConnection
     * @throws ApiError
     */
    public static outpostsServiceConnectionsKubernetesPartialUpdate(
        uuid: string,
        requestBody?: PatchedKubernetesServiceConnectionRequest,
    ): CancelablePromise<KubernetesServiceConnection> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/outposts/service_connections/kubernetes/{uuid}/',
            path: {
                'uuid': uuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * KubernetesServiceConnection Viewset
     * @param uuid A UUID string identifying this Kubernetes Service-Connection.
     * @returns void
     * @throws ApiError
     */
    public static outpostsServiceConnectionsKubernetesDestroy(
        uuid: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/outposts/service_connections/kubernetes/{uuid}/',
            path: {
                'uuid': uuid,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param uuid A UUID string identifying this Kubernetes Service-Connection.
     * @returns UsedBy
     * @throws ApiError
     */
    public static outpostsServiceConnectionsKubernetesUsedByList(
        uuid: string,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/outposts/service_connections/kubernetes/{uuid}/used_by/',
            path: {
                'uuid': uuid,
            },
        });
    }
}
