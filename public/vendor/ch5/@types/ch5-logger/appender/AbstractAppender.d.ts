import { LogMessage } from '../helpers/index';
import { Observable } from 'rxjs';
export declare abstract class AbstractAppender {
    private _sendLogTimeOffset;
    constructor(sendLogTimeOffsetInMiliseconds: number);
    sendLogTimeOffset: Observable<number>;
    abstract configObserver(config: {}, hasConfig: boolean): void;
    abstract log(data: LogMessage): void;
}
