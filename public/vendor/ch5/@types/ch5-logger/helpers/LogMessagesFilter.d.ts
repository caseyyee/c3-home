import { TDataLog } from '../types';
import { LogLevelEnum } from '../enums';
export declare class LogMessagesFilter {
    level: LogLevelEnum;
    source: string;
    regularExpression: string;
    static getDefaultLevel(): LogLevelEnum;
    constructor(level?: LogLevelEnum, source?: string, regexStr?: string);
    undateSourceFromConfig(): void;
    clearFilter(): void;
    applyFilter(data: TDataLog): boolean;
    isMatchingFilterLevel(dataLevel: LogLevelEnum): boolean;
    isMatchingFilterRegex(message: string): boolean;
    isMatchingFilterSource(dataSource: string): boolean;
}
