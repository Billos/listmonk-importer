/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PromptTypeEnum } from './PromptTypeEnum';
/**
 * Serializer for a single Prompt field
 */
export type StagePrompt = {
    field_key: string;
    label: string;
    type: PromptTypeEnum;
    required: boolean;
    placeholder: string;
    initial_value: string;
    order: number;
    sub_text: string;
    choices: Array<string> | null;
};

