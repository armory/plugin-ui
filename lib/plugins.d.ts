import { PipelineRegistry } from '@spinnaker/core';
export declare type IPluginInitialize = (registry: IStageRegistry) => void;
export interface IStageRegistry {
    pipeline: PipelineRegistry;
}
declare global {
    interface Window {
        spinnakerSettings: any;
    }
}
