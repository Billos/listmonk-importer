/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AuthModeEnum } from './AuthModeEnum';
import type { ProtocolEnum } from './ProtocolEnum';
import type { RACProvider } from './RACProvider';
/**
 * Endpoint Serializer
 */
export type Endpoint = {
    readonly pk: string;
    name: string;
    provider: number;
    readonly provider_obj: RACProvider;
    protocol: ProtocolEnum;
    host: string;
    settings?: any;
    property_mappings?: Array<string>;
    auth_mode: AuthModeEnum;
    /**
     * Build actual launch URL (the provider itself does not have one, just
     * individual endpoints)
     */
    readonly launch_url: string | null;
    maximum_connections?: number;
};

