/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FlowSet } from './FlowSet';
import type { GeoipBindingEnum } from './GeoipBindingEnum';
import type { NetworkBindingEnum } from './NetworkBindingEnum';
/**
 * UserLoginStage Serializer
 */
export type UserLoginStage = {
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
    /**
     * Determines how long a session lasts. Default of 0 means that the sessions lasts until the browser is closed. (Format: hours=-1;minutes=-2;seconds=-3)
     */
    session_duration?: string;
    /**
     * Terminate all other sessions of the user logging in.
     */
    terminate_other_sessions?: boolean;
    /**
     * Offset the session will be extended by when the user picks the remember me option. Default of 0 means that the remember me option will not be shown. (Format: hours=-1;minutes=-2;seconds=-3)
     */
    remember_me_offset?: string;
    /**
     * Bind sessions created by this stage to the configured network
     */
    network_binding?: NetworkBindingEnum;
    /**
     * Bind sessions created by this stage to the configured GeoIP location
     */
    geoip_binding?: GeoipBindingEnum;
};

