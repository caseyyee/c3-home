export declare class JSInterface {
    static debug: boolean;
    static bridgeSendBooleanToNative(signalName: string, value: boolean): void;
    static bridgeSendIntegerToNative(signalName: string, value: number): void;
    static bridgeSendStringToNative(signalName: string, value: string): void;
    static bridgeSendObjectToNative(signalName: string, object: object): void;
    static bridgeSendArrayToNative(jsonEncodedArray: any[]): void;
    static bridgeSubscribeBooleanSignalFromNative(signalName: string): void;
    static bridgeSubscribeIntegerSignalFromNative(signalName: string): void;
    static bridgeSubscribeStringSignalFromNative(signalName: string): void;
    static bridgeSubscribeObjectSignalFromNative(signalName: string): void;
    static bridgeUnsubscribeBooleanSignalFromNative(signalName: string): void;
    static bridgeUnsubscribeIntegerSignalFromNative(signalName: string): void;
    static bridgeUnsubscribeStringSignalFromNative(signalName: string): void;
    static bridgeUnsubscribeObjectSignalFromNative(signalName: string): void;
}
