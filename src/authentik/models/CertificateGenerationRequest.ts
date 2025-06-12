/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AlgEnum } from './AlgEnum';
/**
 * Certificate generation parameters
 */
export type CertificateGenerationRequest = {
    common_name: string;
    subject_alt_name?: string;
    validity_days: number;
    alg?: AlgEnum;
};

