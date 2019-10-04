import { ICh5CommonAttributes } from "../ch5-common";
import { TCh5OverlayPanelStretch, TCh5OverlayPanelOverflow, TCh5OverlayPanelPositionOffset } from "./types";
export interface ICh5OverlayPanelAttributes extends ICh5CommonAttributes {
    closeIcon: string;
    stretch: TCh5OverlayPanelStretch;
    overflow: TCh5OverlayPanelOverflow;
    positionTo: string;
    positionOffset: TCh5OverlayPanelPositionOffset;
    receiveStatePositionTo: string;
    receiveStatePositionOffset: string;
    sendEventOnBeforeShow: string;
    sendEventOnAfterShow: string;
    sendEventOnBeforeHide: string;
    sendEventOnAfterHide: string;
}
