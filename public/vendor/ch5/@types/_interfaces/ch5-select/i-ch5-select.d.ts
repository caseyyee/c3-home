import { ICh5SelectAttributes } from "./i-ch5-select-attributes";
import { ICh5Common } from "../ch5-common";
import { TBoolAttribute } from "../ch5-common/types/t-bool-attribute";
export interface ICh5Select extends ICh5SelectAttributes, ICh5Common {
    onclean: string;
    ondirty: string;
    multiselect: TBoolAttribute;
    resize: TBoolAttribute;
}
