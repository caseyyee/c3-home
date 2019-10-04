import { ICh5CommonInputAttributes } from "../ch5-common-input";
import { TCh5CommonInputFeedbackModes } from "../ch5-common-input/types";
import { TCh5ToggleOrientation, TCh5ToggleShape } from "./types";
export interface ICh5ToggleAttributes extends ICh5CommonInputAttributes {
    label: string;
    labelOn: string;
    labelOff: string;
    iconOn: string;
    iconOff: string;
    handleShape: TCh5ToggleShape;
    orientation: TCh5ToggleOrientation;
    signalValueSyncTimeout: string | number;
    feedbackMode: TCh5CommonInputFeedbackModes;
    receiveStateScriptLabelHtml: string;
    receiveStateValue: string;
    sendEventOnClick: string;
}
