import { ICh5Common } from "../ch5-common";
import { ICh5OverlayPanelAttributes } from "./i-ch5-overlay-panel-attributes";
import { TBoolAttribute } from "../ch5-common/types/t-bool-attribute";
export interface ICh5OverlayPanel extends ICh5OverlayPanelAttributes, ICh5Common {
    dismissable: TBoolAttribute;
    closable: TBoolAttribute;
}
