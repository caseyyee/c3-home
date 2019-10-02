import { ICh5CommonAttributes } from "../ch5-common";
export interface ICh5TriggerviewAttributes extends ICh5CommonAttributes {
    activeView: number;
    endless: boolean;
    gestureable: boolean;
    sendEventShowChildIndex: string;
    receiveStateShowChildIndex: string;
    nested: boolean;
}
