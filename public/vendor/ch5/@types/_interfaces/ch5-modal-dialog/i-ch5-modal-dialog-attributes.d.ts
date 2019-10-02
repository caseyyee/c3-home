import { ICh5OverlayPanelAttributes } from "../ch5-overlay-panel/i-ch5-overlay-panel-attributes";
export interface ICh5ModalDialogAttributes extends ICh5OverlayPanelAttributes {
    width: string;
    height: string;
    title: string;
    mask: boolean;
    maskStyle: string;
    hideOkButton: boolean;
    okButtonLabel: string;
    okButtonIcon: string;
    okButtonStyle: string;
    hideCancelButton: boolean;
    cancelButtonLabel: string;
    cancelButtonIcon: string;
    cancelButtonStyle: string;
    prompt: string;
    promptIcon: string;
    receiveStatePositionTo: string;
    receiveStatePositionOffset: string;
    sendEventOnBeforeShow: string;
    sendEventOnAfterShow: string;
    sendEventOnBeforeHide: string;
    sendEventOnAfterHide: string;
    sendEventOnOk: string;
    sendEventOnCancel: string;
}
