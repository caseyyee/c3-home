import { AppendersEnum } from '../enums/index';
import { RemoteAppender } from './RemoteAppender';
export declare class AppenderFactory {
    getAppender(appender: AppendersEnum, sendLogTimeOffset?: number): RemoteAppender;
}
