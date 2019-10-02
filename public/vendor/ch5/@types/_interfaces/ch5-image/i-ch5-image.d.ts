import { ICh5Common } from "../ch5-common";
import { ICh5ImageAttributes } from "./i-ch5-image-attributes";
export interface ICh5Image extends ICh5Common, ICh5ImageAttributes {
    onpress: string;
    onrelease: string;
}
