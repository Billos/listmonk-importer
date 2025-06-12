/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PromptTypeEnum } from './PromptTypeEnum';
import type { Stage } from './Stage';
/**
 * Prompt Serializer
 */
export type Prompt = {
    readonly pk: string;
    name: string;
    /**
     * Name of the form field, also used to store the value
     */
    field_key: string;
    label: string;
    type: PromptTypeEnum;
    required?: boolean;
    /**
     * Optionally provide a short hint that describes the expected input value. When creating a fixed choice field, enable interpreting as expression and return a list to return multiple choices.
     */
    placeholder?: string;
    /**
     * Optionally pre-fill the input with an initial value. When creating a fixed choice field, enable interpreting as expression and return a list to return multiple default choices.
     */
    initial_value?: string;
    order?: number;
    promptstage_set?: Array<Stage>;
    sub_text?: string;
    placeholder_expression?: boolean;
    initial_value_expression?: boolean;
};

