import { ICh5SelectAttributes } from "./i-ch5-select-attributes";
import { ICh5Common } from "../ch5-common";
export interface ICh5Select extends ICh5SelectAttributes, ICh5Common {
    onclean: string;
    ondirty: string;
}
