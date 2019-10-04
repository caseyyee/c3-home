import { ICh5FormAttributes } from "./i-ch5-form-attributes";
import { ICh5Common } from "../ch5-common";
import { TBoolAttribute } from "../ch5-common/types/t-bool-attribute";
export interface ICh5Form extends ICh5FormAttributes, ICh5Common {
    hideSubmitButton: TBoolAttribute;
    hideCancelButton: TBoolAttribute;
}
