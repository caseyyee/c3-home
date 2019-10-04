import { ICh5CommonAttributes } from "../ch5-common";
import { TCh5SelectIconPosition, TCh5SelectMode } from "./types";
import { TCh5CommonInputFeedbackModes } from "../ch5-common-input/types";
export interface ICh5SelectAttributes extends ICh5CommonAttributes {
    size: string | number;
    iconPosition: TCh5SelectIconPosition;
    selectedValue: string | number;
    panelScrollHeight: number;
    minWidth: string | null;
    maxWidth: string | null;
    minHeight: string | null;
    maxHeight: string | null;
    mode: TCh5SelectMode;
    feedbackMode: TCh5CommonInputFeedbackModes;
    signalValueSyncTimeout: string | number;
    indexId: string | null;
    noneSelectedPrompt: string | null;
    receiveStateValue: string | null;
    receiveStateSize: string | null;
    receiveStateTemplateVars: string | null;
    sendEventOnFocus: string | null;
    sendEventOnChange: string | null;
}
