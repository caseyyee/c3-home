import { ICh5CommonAttributes } from "../ch5-common";
export interface ICh5ImageAttributes extends ICh5CommonAttributes {
    alt: string;
    height: string;
    width: string;
    refreshRate: number | string;
    url: string;
    receiveStateUrl: string;
    sendEventOnTouch: string;
    sendEventOnClick: string;
    sendEventOnError: string;
}
