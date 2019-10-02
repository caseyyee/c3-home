import { TSignalStandardTypeName, TRepeatDigitalSignalValue } from './core';
export declare class Ch5SignalBridge {
    static readonly REPEAT_DIGITAL_KEY: string;
    private _subscriptions;
    private _localPublishers;
    private _isWebView;
    private _isWebKit;
    constructor();
    subscribe(signalName: string, type: TSignalStandardTypeName): void;
    unsubscribe(signalName: string, type: string): void;
    publish(signalName: string, value: boolean | number | string | object | TRepeatDigitalSignalValue): void;
    private sendBooleanToNative(signalName, value);
    private sendIntegerToNative(signalName, value);
    private sendStringToNative(signalName, value);
    private sendObjectToNative(signalName, value);
    private sendArrayToNative(signalArray);
    private createPMParam(signalName, value?);
}
