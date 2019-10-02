import { TSignalNonStandardTypeName } from "../core";
import { TAllSignalSubscriptionUpdateCallbacks } from "../types/callbacks";
export declare function subscribeState(signalType: TSignalNonStandardTypeName, signalName: string, callback: TAllSignalSubscriptionUpdateCallbacks, errCallback?: TAllSignalSubscriptionUpdateCallbacks): string;
