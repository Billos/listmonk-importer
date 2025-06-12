/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DigitsEnum } from './DigitsEnum';
import type { FlowSetRequest } from './FlowSetRequest';
/**
 * AuthenticatorTOTPStage Serializer
 */
export type AuthenticatorTOTPStageRequest = {
    name: string;
    flow_set?: Array<FlowSetRequest>;
    /**
     * Flow used by an authenticated user to configure this Stage. If empty, user will not be able to configure this stage.
     */
    configure_flow?: string | null;
    friendly_name?: string | null;
    digits: DigitsEnum;
};

