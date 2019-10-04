import { Ch5Common } from "../ch5-common/ch5-common";
import { ICh5ImportHtmlSnippetAttributes } from "../_interfaces/ch5-import-htmlsnippet/i-ch5-import-htmlsnippet-attributes";
export declare class Ch5ImportHtmlSnippet extends Ch5Common implements ICh5ImportHtmlSnippetAttributes {
    private _elContainer;
    private _url;
    private _sigNameReceiveState;
    private _subReceiveState;
    private _sigNameSendOnError;
    private errorEvent;
    private sigNameSendOnLoad;
    private loadEvent;
    private _sendEventOnShowSigName;
    constructor();
    url: string;
    sendEventOnShow: string;
    static readonly observedAttributes: string[];
    attributeChangedCallback(attr: string, oldValue: string, newValue: any): void;
    unsubscribeFromSignals(): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private sendValueOnLoadSignal(value);
    private onLoadAction(finalValue);
    private loadHTMLContent(url);
    private loadJSON(url, callback);
    private _sendSignalValueOnShow();
    private _onError(inEvent);
    private _sendValueForErrorSignal(errorMessage);
    protected initAttributes(): void;
}
