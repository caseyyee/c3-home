import { ICh5CommonAttributes } from "../ch5-common";
import { TCh5ButtonSize, TCh5ButtonIconPosition, TCh5ButtonOrientation, TCh5ButtonShape, TCh5ButtonStretch, TCh5ButtonType } from "./types";
export interface ICh5ButtonAttributes extends ICh5CommonAttributes {
    size: TCh5ButtonSize;
    label: string;
    iconClass: string;
    iconPosition: TCh5ButtonIconPosition;
    iconUrl: string;
    orientation: TCh5ButtonOrientation;
    shape: TCh5ButtonShape;
    stretch: TCh5ButtonStretch;
    type: TCh5ButtonType;
    receiveStateSelected: string;
    receiveStateLabel: string;
    receiveStateScriptLabelHtml: string;
    sendEventOnClick: string;
    sendEventOnTouch: string;
}
