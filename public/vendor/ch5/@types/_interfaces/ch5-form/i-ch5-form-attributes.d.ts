import { ICh5CommonAttributes } from "../ch5-common";
export interface ICh5FormAttributes extends ICh5CommonAttributes {
    hideSubmitButton: boolean | string;
    submitButtonLabel: string;
    submitButtonIcon: string;
    submitButtonStyle: string;
    submitButtonType: string;
    hideCancelButton: boolean | string;
    cancelButtonLabel: string;
    cancelButtonIcon: string;
    cancelButtonStyle: string;
    cancelButtonType: string;
    submitId: string;
    cancelId: string;
}
