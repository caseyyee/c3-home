import { ICh5ButtonAttributes } from "./i-ch5-button-attributes";
import { ICh5Common } from "../ch5-common";
export interface ICh5Button extends ICh5ButtonAttributes, ICh5Common {
    onpress: string;
    onrelease: string;
}
