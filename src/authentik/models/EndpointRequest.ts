/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AuthModeEnum } from './AuthModeEnum';
import type { ProtocolEnum } from './ProtocolEnum';
/**
 * Endpoint Serializer
 */
export type EndpointRequest = {
    name: string;
    provider: number;
    protocol: ProtocolEnum;
    host: string;
    settings?: any;
    property_mappings?: Array<string>;
    auth_mode: AuthModeEnum;
    maximum_connections?: number;
};

