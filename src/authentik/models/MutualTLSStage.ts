/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CertAttributeEnum } from './CertAttributeEnum';
import type { FlowSet } from './FlowSet';
import type { MutualTLSStageModeEnum } from './MutualTLSStageModeEnum';
import type { UserAttributeEnum } from './UserAttributeEnum';
/**
 * MutualTLSStage Serializer
 */
export type MutualTLSStage = {
    readonly pk: string;
    name: string;
    /**
     * Get object type so that we know how to edit the object
     */
    readonly component: string;
    /**
     * Return object's verbose_name
     */
    readonly verbose_name: string;
    /**
     * Return object's plural verbose_name
     */
    readonly verbose_name_plural: string;
    /**
     * Return internal model name
     */
    readonly meta_model_name: string;
    flow_set?: Array<FlowSet>;
    mode: MutualTLSStageModeEnum;
    /**
     * Configure certificate authorities to validate the certificate against. This option has a higher priority than the `client_certificate` option on `Brand`.
     */
    certificate_authorities?: Array<string>;
    cert_attribute: CertAttributeEnum;
    user_attribute: UserAttributeEnum;
};

