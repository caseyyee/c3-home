import { ICh5CommonAttributes } from "../ch5-common";
import { TCh5SpinnerIconPosition } from "./types";
import { TCh5CommonInputFeedbackModes } from "../ch5-common-input/types";
export interface ICh5SpinnerAttributes extends ICh5CommonAttributes {
    size: number;
    label: string;
    iconPosition: TCh5SpinnerIconPosition;
    selectedValue: number;
    itemHeight: string;
    visibleItemScroll: number;
    feedbackMode: TCh5CommonInputFeedbackModes;
    signalValueSyncTimeout: number;
    indexId: string;
    receiveStateValue: string;
    receiveStateSize: string;
    receiveStateLabel: string;
    receiveStateUrl: string;
    sendEventOnChange: string;
    sendEventOnFocus: string;
    sendEventOnOverflow: string;
    sendEventOnUnderflow: string;
}
