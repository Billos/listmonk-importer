/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * CertificateKeyPair Serializer
 */
export type CertificateKeyPair = {
    readonly pk: string;
    name: string;
    /**
     * Get certificate Hash (SHA256)
     */
    readonly fingerprint_sha256: string | null;
    /**
     * Get certificate Hash (SHA1)
     */
    readonly fingerprint_sha1: string | null;
    /**
     * Get certificate expiry
     */
    readonly cert_expiry: string | null;
    /**
     * Get certificate subject as full rfc4514
     */
    readonly cert_subject: string | null;
    /**
     * Show if this keypair has a private key configured or not
     */
    readonly private_key_available: boolean;
    /**
     * Get the private key's type, if set
     */
    readonly private_key_type: string | null;
    /**
     * Get URL to download certificate
     */
    readonly certificate_download_url: string;
    /**
     * Get URL to download private key
     */
    readonly private_key_download_url: string;
    /**
     * Objects that are managed by authentik. These objects are created and updated automatically. This flag only indicates that an object can be overwritten by migrations. You can still modify the objects via the API, but expect changes to be overwritten in a later update.
     */
    readonly managed: string | null;
};

