import { TCh5ShowType } from "./types/t-ch5-show-type";
export interface ICh5CommonAttributes {
    id: string;
    customClass: string;
    customStyle: string;
    noshowType: TCh5ShowType;
    receiveStateCustomClass: string;
    receiveStateCustomStyle: string;
    receiveStateShow: string;
    receiveStateShowPulse: string;
    receiveStateHidePulse: string;
    receiveStateEnable: string;
    sendEventOnShow: string;
    appendClassWhenInViewPort: string;
}
