import { ICh5SpinnerAttributes } from "./i-ch5-spinner-attributes";
import { ICh5Common } from "../ch5-common";
export interface ICh5Spinner extends ICh5SpinnerAttributes, ICh5Common {
    onclean: string;
    ondirty: string;
}
