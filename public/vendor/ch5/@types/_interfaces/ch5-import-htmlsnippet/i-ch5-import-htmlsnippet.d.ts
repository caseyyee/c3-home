import { ICh5ImportHtmlSnippetAttributes } from "./i-ch5-import-htmlsnippet-attributes";
import { ICh5Common } from "../ch5-common";
export interface ICh5importHtmlSnippet extends ICh5ImportHtmlSnippetAttributes, ICh5Common {
    url: string;
    receiveStateShowPulse: string;
    receiveStateHidePulse: string;
    receiveStateShow: string;
}
