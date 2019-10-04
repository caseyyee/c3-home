import { ICh5Common } from "../ch5-common";
import { ICh5ListAttributes } from "./i-ch5-list-attributes";
import { TBoolAttribute } from '../ch5-common/types/t-bool-attribute';
export interface ICh5List extends ICh5ListAttributes, ICh5Common {
    scrollbar: TBoolAttribute;
    pagedSwipe: TBoolAttribute;
    endless: TBoolAttribute;
}
