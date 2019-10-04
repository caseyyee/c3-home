import { ICh5CommonInputAttributes } from "./i-ch5-common-input-attributes";
import { TBoolAttribute } from "../ch5-common/types/t-bool-attribute";
export interface ICh5CommonInput extends ICh5CommonInputAttributes {
    onclean: string;
    ondirty: string;
    required: TBoolAttribute;
}
