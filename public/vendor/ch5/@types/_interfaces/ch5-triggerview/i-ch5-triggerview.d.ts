import { ICh5Common } from "../ch5-common";
import { ICh5TriggerviewAttributes } from "./i-ch5-triggerview-attributes";
import { TBoolAttribute } from "../ch5-common/types/t-bool-attribute";
export interface ICh5TriggerView extends ICh5TriggerviewAttributes, ICh5Common {
    endless: TBoolAttribute;
    gestureable: TBoolAttribute;
    nested: TBoolAttribute;
}
