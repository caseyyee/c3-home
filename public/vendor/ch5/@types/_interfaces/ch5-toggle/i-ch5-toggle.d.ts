import { ICh5ToggleAttributes } from "./i-ch5-toggle-attributes";
import { ICh5Common } from "../ch5-common";
import { TBoolAttribute } from "../ch5-common/types/t-bool-attribute";
export interface ICh5Toggle extends ICh5ToggleAttributes, ICh5Common {
    onclean: string;
    ondirty: string;
    value: TBoolAttribute;
}
