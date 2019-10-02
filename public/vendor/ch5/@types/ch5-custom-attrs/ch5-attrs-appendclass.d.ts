import { ICh5AttrsAppendclass } from '../_interfaces/ch5-custom-attrs/i-ch5-attrs-appendclass';
import { CustomAttribute } from '../_interfaces/ch5-custom-attrs/helpers/custom-attribute';
export declare class Ch5AttrsAppendclass extends CustomAttribute<string> implements ICh5AttrsAppendclass {
    static DATA_CH5_ATTR_NAME: string;
    static CH5_ATTR_SIG_SUB_KEY: string;
    static handleBeingAddedToDom(el: Element): void;
    static handleBeingRemovedFromDom(el: Element): void;
    static handleSubscribe(el: Element, sigName: string): string;
    static handleUnsubscribe(el: Element, sigName: string, subKey: string): void;
    static handleCh5AppendclassAttrChange(newValue: string | null, oldValue: string | null, el: Element): void;
}
