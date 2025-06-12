/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApplicationRequest } from './ApplicationRequest';
import type { modelRequest } from './modelRequest';
import type { ProviderModelEnum } from './ProviderModelEnum';
import type { TransactionPolicyBindingRequest } from './TransactionPolicyBindingRequest';
/**
 * Serializer for creating a provider and an application in one transaction
 */
export type TransactionApplicationRequest = {
    app: ApplicationRequest;
    provider_model: ProviderModelEnum;
    provider: modelRequest;
    policy_bindings?: Array<TransactionPolicyBindingRequest>;
};

