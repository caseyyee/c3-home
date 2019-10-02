import { ICh5StatesAtDefaultValueModel } from "./models/ch5-states-at-default-value-model";
import { ICh5ExcludePrefixesModel } from "./models/ch5-exclude-prefixes-model";
import { ICh5ClearRangeDataModel } from "./models/ch5-clear-range-data-model";
export declare class Ch5Resync {
    private static _instance;
    _statesAtDefaultValue: ICh5StatesAtDefaultValueModel[];
    private _inUpdateState;
    private readonly statesRef;
    private ch5SignalFactory;
    static checkIfStateShouldBeIncluded(excludeStatesWithThesePrefixes: ICh5ExcludePrefixesModel, state: string): boolean;
    static excludeStateOnClearRange(statesToCheck: string[], excludePrefixes: string[]): string[];
    static readonly Instance: Ch5Resync;
    private constructor();
    onReceiveClearAll(excludeStatesWithThesePrefixes: ICh5ExcludePrefixesModel): void;
    onReceiveClearRange(statesToReset: ICh5ClearRangeDataModel, excludePrefixes: string[]): void;
    onReceiveUpdatedState(stateName: string, value: any, type: any): void;
    onReceiveEndOfUpdate(): void;
    addDefaultJoinsOnClearRange(joinLow: number, joinHigh: number, eventType: string): void;
    addDefaultStatesOnClearRange(states: string[], eventType: string): void;
    setDefaultStatesOnClearAll(excludeStatesWithThesePrefixes: ICh5ExcludePrefixesModel): void;
    setRemainingStatesToDefaultValue(): void;
}
