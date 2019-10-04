import { ICh5CommonAttributes } from "../ch5-common/i-ch5-common-attributes";
import { TCh5CommonInputFeedbackModes } from "./types";
export interface ICh5CommonInputAttributes extends ICh5CommonAttributes {
    feedbackMode: TCh5CommonInputFeedbackModes;
    signalValueSyncTimeout: number | string;
}
