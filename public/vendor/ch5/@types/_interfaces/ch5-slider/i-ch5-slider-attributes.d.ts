import { ICh5CommonAttributes } from "../ch5-common";
import { TCh5SliderOrientation, TCh5SliderShape, TCh5SliderSize, TCh5SliderStretch, TCh5SliderTooltipDisplay, TCh5SliderTooltipType } from "./types";
import { TCh5CommonInputFeedbackModes } from "../ch5-common-input/types";
export interface ICh5SliderAttributes extends ICh5CommonAttributes {
    handleShape: TCh5SliderShape;
    value: number | string;
    range: boolean | string;
    valueHigh: number | string;
    max: number | string;
    min: number | string;
    orientation: TCh5SliderOrientation;
    size: TCh5SliderSize;
    handleSize: TCh5SliderSize;
    step: number | string;
    stretch: TCh5SliderStretch;
    ticks: string;
    showTickValues: boolean | string;
    toolTipShowType: TCh5SliderTooltipType;
    toolTipDisplayType: TCh5SliderTooltipDisplay;
    signalValueSyncTimeout: string | number;
    feedbackMode: TCh5CommonInputFeedbackModes;
    receiveStateValue: string;
    receiveStateValueHigh: string;
    sendEventOnChange: string;
    sendEventOnChangeHigh: string;
    noHandle: boolean | string;
}
