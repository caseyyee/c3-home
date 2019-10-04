import { ICh5Common } from "../ch5-common/i-ch5-common";
import { ICh5ModalDialogAttributes } from "./i-ch5-modal-dialog-attributes";
import { TBoolAttribute } from "../ch5-common/types/t-bool-attribute";
export interface ICh5ModalDialog extends ICh5ModalDialogAttributes, ICh5Common {
    dismissable: TBoolAttribute;
    closable: TBoolAttribute;
    mask: TBoolAttribute;
    hideOkButton: TBoolAttribute;
    hideCancelButton: TBoolAttribute;
}
