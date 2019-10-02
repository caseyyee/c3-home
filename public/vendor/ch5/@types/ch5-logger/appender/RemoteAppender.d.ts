import { AbstractAppender } from "./AbstractAppender";
import { LogMessage } from "../helpers/index";
import { Logger } from "../logger";
export declare class RemoteAppender extends AbstractAppender {
    private _requestService;
    private _address;
    log(data: LogMessage): void;
    setIP(ip: string, port?: string, secure?: boolean): void;
    configObserver(helper: Logger, hasFilterConfig: boolean): void;
    protected initialiseRequest(uri: string): void;
}
