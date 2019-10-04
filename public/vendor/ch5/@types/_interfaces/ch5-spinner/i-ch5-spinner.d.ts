import { ICh5SpinnerAttributes } from "./i-ch5-spinner-attributes";
import { ICh5Common } from "../ch5-common";
import { TBoolAttribute } from "../ch5-common/types/t-bool-attribute";
export interface ICh5Spinner extends ICh5SpinnerAttributes, ICh5Common {
    onclean: string;
    ondirty: string;
    resize: TBoolAttribute;
    endless: TBoolAttribute;
}
