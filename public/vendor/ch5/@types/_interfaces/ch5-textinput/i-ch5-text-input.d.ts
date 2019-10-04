import { ICh5TextInputAttributes } from "./i-ch5-text-input-attributes";
import { ICh5CommonInput } from "../ch5-common-input";
import { ICh5Common } from "../ch5-common";
import { TBoolAttribute } from "../ch5-common/types/t-bool-attribute";
export interface ICh5TextInput extends ICh5TextInputAttributes, ICh5CommonInput, ICh5Common {
    onvaliditychange: string;
    scaling: TBoolAttribute;
}
