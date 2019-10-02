import { BehaviorSubject } from 'rxjs';
import { TSignal } from './types/signal.type';
export declare class Ch5SignalBehaviorSubject<T extends TSignal> extends BehaviorSubject<T> {
    private _prevValue;
    constructor(value: T, prevValue: T);
    readonly prevValue: T;
    private getPrevValue();
    next(value: T): void;
}
