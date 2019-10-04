import { TCh5OverlayPanelOverflow, TCh5OverlayPanelStretch } from "../ch5-overlay-panel/types";
export interface ICh5ModalDialogAttributes {
    closeIcon: string;
    stretch: TCh5OverlayPanelStretch;
    overflow: TCh5OverlayPanelOverflow;
    width: string;
    height: string;
    title: string;
    maskStyle: string;
    okButtonLabel: string;
    okButtonIcon: string;
    okButtonStyle: string;
    cancelButtonLabel: string;
    cancelButtonIcon: string;
    cancelButtonStyle: string;
    prompt: string;
    promptIcon: string;
    sendEventOnBeforeShow: string;
    sendEventOnAfterShow: string;
    sendEventOnBeforeHide: string;
    sendEventOnAfterHide: string;
    sendEventOnOk: string;
    sendEventOnCancel: string;
}
