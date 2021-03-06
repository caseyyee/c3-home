import { Ch5Signal } from "../ch5-core";
import { Ch5ListAbstractHelper } from "./ch5-list-abstract-helper";
import { TSignal } from '../ch5-core/types/signal.type';
export declare type SignalSubscription = (sigName: string | null | undefined, subscriptionKey: string) => void;
export declare type SignalSubscriptionCallback = (newValue: string | number | boolean) => void;
export declare class Ch5ListSignalManager extends Ch5ListAbstractHelper {
    unsubscribeFromSignals(clearStringSignalSubscription: SignalSubscription): void;
    subscribeToSignal<T extends TSignal>(type: T, signalPropName: string, signalSub: string, callback: SignalSubscriptionCallback): string;
    getStateFromFactory<T extends TSignal>(signalName: string, type: T): Ch5Signal<T> | null;
    private clearSubscription(clearSubscription, signalSub, signalName);
}
