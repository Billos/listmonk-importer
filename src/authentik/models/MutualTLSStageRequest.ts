/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CertAttributeEnum } from './CertAttributeEnum';
import type { FlowSetRequest } from './FlowSetRequest';
import type { MutualTLSStageModeEnum } from './MutualTLSStageModeEnum';
import type { UserAttributeEnum } from './UserAttributeEnum';
/**
 * MutualTLSStage Serializer
 */
export type MutualTLSStageRequest = {
    name: string;
    flow_set?: Array<FlowSetRequest>;
    mode: MutualTLSStageModeEnum;
    /**
     * Configure certificate authorities to validate the certificate against. This option has a higher priority than the `client_certificate` option on `Brand`.
     */
    certificate_authorities?: Array<string>;
    cert_attribute: CertAttributeEnum;
    user_attribute: UserAttributeEnum;
};

