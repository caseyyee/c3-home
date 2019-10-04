import { ICh5CommonInputAttributes } from "../ch5-common-input";
import { TCh5TextInputStretch, TCh5TextInputSize, TCh5TextInputType, TCh5TextInputTextTransform, TCh5TextInputIconPosition } from "./types";
export interface ICh5TextInputAttributes extends ICh5CommonInputAttributes {
    mask: string;
    icon: string;
    label: string;
    placeholder: string;
    iconPosition: TCh5TextInputIconPosition;
    inputType: TCh5TextInputType;
    minLength: number;
    maxLength: number;
    minValue: number;
    maxValue: number;
    size: TCh5TextInputSize;
    stretch: TCh5TextInputStretch;
    textTransform: TCh5TextInputTextTransform;
    receiveStateFocus: string;
    receiveStateValue: string;
    sendEventOnChange: string;
    sendEventOnFocus: string;
    sendEventOnBlur: string;
}
