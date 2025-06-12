/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Campaign } from '../models/Campaign';
import type { CampaignAnalyticsCount } from '../models/CampaignAnalyticsCount';
import type { CampaignContentRequest } from '../models/CampaignContentRequest';
import type { CampaignRequest } from '../models/CampaignRequest';
import type { CampaignStats } from '../models/CampaignStats';
import type { CampaignUpdate } from '../models/CampaignUpdate';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CampaignsService {
    /**
     * handles retrieval of campaigns
     * @param status Filter campaigns by status. Multiple status values can be specified by repeating the parameter
     * @param noBody When set to true, returns response without body content
     * @param page Page number for paginated results.
     * @param perPage Number of items per page. Use an integer for specific page size or 'all' to retrieve all results
     * @param tags Filter campaigns by tags. Multiple tags can be specified by repeating the parameter
     * @param order Determines the sort order of results. ASC for ascending, DESC for descending order
     * @param orderBy Specifies the field by which to sort the campaigns. Available options are 'name', 'status', 'created_at', and 'updated_at'
     * @param query SQL query expression to filter campaigns by custom criteria
     * @returns any list of campaigns
     * @throws ApiError
     */
    public static getCampaigns(
        status?: Array<'scheduled' | 'running' | 'paused' | 'cancelled'>,
        noBody?: boolean,
        page?: number,
        perPage?: (number | 'all'),
        tags?: Array<string>,
        order?: 'ASC' | 'DESC',
        orderBy?: 'name' | 'status' | 'created_at' | 'updated_at',
        query?: string,
    ): CancelablePromise<{
        data?: {
            results?: Array<Campaign>;
            query?: string;
            total?: number;
            per_page?: number;
            page?: number;
        };
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/campaigns',
            query: {
                'status': status,
                'no_body': noBody,
                'page': page,
                'per_page': perPage,
                'tags': tags,
                'order': order,
                'order_by': orderBy,
                'query': query,
            },
        });
    }
    /**
     * handles campaign creation
     * @param requestBody new campaign info
     * @returns any new campaign object
     * @throws ApiError
     */
    public static createCampaign(
        requestBody?: CampaignRequest,
    ): CancelablePromise<{
        data?: CampaignUpdate;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/campaigns',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * handles retrieval of campaigns.
     * @param id The id value of the campaign you want to get.
     * @param noBody boolean flag for response with/without body
     * @returns any campaign object
     * @throws ApiError
     */
    public static getCampaignById(
        id: number,
        noBody?: boolean,
    ): CancelablePromise<{
        data?: Campaign;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/campaigns/{id}',
            path: {
                'id': id,
            },
            query: {
                'no_body': noBody,
            },
        });
    }
    /**
     * handle updation of campaign
     * @param id the id value of campaign you want to update
     * @param requestBody updated campaign fields
     * @returns any updated campaign object
     * @throws ApiError
     */
    public static updateCampaignById(
        id: number,
        requestBody?: CampaignRequest,
    ): CancelablePromise<{
        data?: CampaignUpdate;
    }> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/campaigns/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * deletes specified campaign
     * @param id The id value of the campaign you want to get.
     * @returns any OK
     * @throws ApiError
     */
    public static deleteCampaignById(
        id: number,
    ): CancelablePromise<{
        data?: boolean;
    }> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/campaigns/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * returns stats of a given set of campaign IDs.
     * @param campaignId Campaign IDs to get stats for.
     * @returns any list of stats for given set of campaign ids
     * @throws ApiError
     */
    public static getRunningCampaignStats(
        campaignId: number,
    ): CancelablePromise<{
        data?: Array<CampaignStats>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/campaigns/running/stats',
            query: {
                'campaign_id': campaignId,
            },
        });
    }
    /**
     * retrieves view counts for a campaign.
     * @param type type of stats, either links, view, click or bounce
     * @param from start value of date range
     * @param to end value of date range
     * @param id campaign id/s to retrive view counts
     * @returns any list of stats for given set of campaign ids
     * @throws ApiError
     */
    public static getCampaignAnalytics(
        type: 'links' | 'views' | 'clicks' | 'bounces',
        from: string,
        to: string,
        id: string,
    ): CancelablePromise<{
        data?: Array<CampaignAnalyticsCount>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/campaigns/analytics/{type}',
            path: {
                'type': type,
            },
            query: {
                'from': from,
                'to': to,
                'id': id,
            },
        });
    }
    /**
     * renders the HTML preview of a campaign body
     * @param id The id value of the campaign you want to get the preview of
     * @returns string HTML Preview of requested campaign
     * @throws ApiError
     */
    public static previewCampaignById(
        id: number,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/campaigns/{id}/preview',
            path: {
                'id': id,
            },
        });
    }
    /**
     * renders the HTML preview of a campaign body
     * @param id The id value of the campaign you want to get the preview of
     * @param formData template id, body and content type
     * @returns string HTML Preview of requested campaign
     * @throws ApiError
     */
    public static updatePreviewCampaignById(
        id: number,
        formData: {
            /**
             * template id
             */
            template_id?: number;
            /**
             * content type
             */
            content_type?: string;
            /**
             * template body
             */
            body?: string;
        },
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/campaigns/{id}/preview',
            path: {
                'id': id,
            },
            formData: formData,
            mediaType: 'application/x-www-form-urlencoded',
        });
    }
    /**
     * renders the HTML preview of a campaign body
     * @param id The id value of the campaign you want to get the preview of
     * @param formData template id, content type and campaign body
     * @returns string response
     * @throws ApiError
     */
    public static previewCampaignTextById(
        id: number,
        formData: {
            /**
             * template id
             */
            template_id?: number;
            /**
             * content type
             */
            content_type?: string;
            /**
             * campaign body
             */
            body?: string;
        },
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/campaigns/{id}/text',
            path: {
                'id': id,
            },
            formData: formData,
            mediaType: 'application/x-www-form-urlencoded',
        });
    }
    /**
     * handles campaign status modification
     * @param id The id value of the campaign you want to get the preview of
     * @param requestBody campaign status update
     * @returns any response
     * @throws ApiError
     */
    public static updateCampaignStatusById(
        id: number,
        requestBody?: {
            status?: 'scheduled' | 'running' | 'paused' | 'cancelled';
        },
    ): CancelablePromise<{
        data?: Campaign;
    }> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/campaigns/{id}/status',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * handles campaign status modification
     * @param id The id value of the campaign you want to get the preview of
     * @param requestBody archive campaign related parameters
     * @returns any response
     * @throws ApiError
     */
    public static updateCampaignArchiveById(
        id: number,
        requestBody?: {
            archive?: boolean;
            archive_template_id?: number;
            archive_meta?: Record<string, any>;
        },
    ): CancelablePromise<{
        data?: boolean;
    }> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/campaigns/{id}/archive',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * handles campaign content (body) format conversions.
     * @param id ID of campaign that you choose to create content
     * @param requestBody updated campaign content
     * @returns any response
     * @throws ApiError
     */
    public static createCampaignContentById(
        id: number,
        requestBody?: CampaignContentRequest,
    ): CancelablePromise<{
        data?: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/campaigns/{id}/content',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * handles sending of campaign message to arbitrary subscribers for testing
     * @param id ID of campaign that you want to test
     * @param formData template id
     * @returns any response
     * @throws ApiError
     */
    public static testCampaignById(
        id: number,
        formData: {
            /**
             * template id
             */
            template_id?: number;
        },
    ): CancelablePromise<{
        data?: boolean;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/campaigns/{id}/test',
            path: {
                'id': id,
            },
            formData: formData,
            mediaType: 'application/x-www-form-urlencoded',
        });
    }
}
