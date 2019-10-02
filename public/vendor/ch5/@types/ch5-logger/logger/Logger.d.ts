import { AbstractAppender } from "../appender/AbstractAppender";
import { TLogMessageType } from "../types/index";
import { LogMessage } from "../helpers/index";
import { LogLevelEnum } from "../enums/index";
import { LogMessagesFilter } from "../helpers/LogMessagesFilter";
export declare class Logger {
    private _appender;
    private _logFilter;
    constructor(appender: AbstractAppender, logFilter?: LogMessagesFilter);
    logFilter: LogMessagesFilter;
    log(...message: TLogMessageType): void;
    info(...message: TLogMessageType): void;
    warn(message: string): void;
    error(message: string, line?: number): void;
    windowErrorListener(error: ErrorEvent | CustomEvent): void;
    addWindowErrorListener(): void;
    appender: AbstractAppender;
    protected formatMessage(level: LogLevelEnum, message: string): LogMessage;
    private checkAndAppendMessage(logMessage);
}
