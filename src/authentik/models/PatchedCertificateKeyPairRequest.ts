/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * CertificateKeyPair Serializer
 */
export type PatchedCertificateKeyPairRequest = {
    name?: string;
    /**
     * PEM-encoded Certificate data
     */
    certificate_data?: string;
    /**
     * Optional Private Key. If this is set, you can use this keypair for encryption.
     */
    key_data?: string;
};

