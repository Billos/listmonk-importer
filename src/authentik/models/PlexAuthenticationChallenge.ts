/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ContextualFlowInfo } from './ContextualFlowInfo';
import type { ErrorDetail } from './ErrorDetail';
/**
 * Challenge shown to the user in identification stage
 */
export type PlexAuthenticationChallenge = {
    flow_info?: ContextualFlowInfo;
    component?: 'ak-source-plex';
    response_errors?: Record<string, Array<ErrorDetail>>;
    client_id: string;
    slug: string;
};

