import { TCh5ListElementOrientation } from '../../_interfaces/ch5-list/types';
export declare type TAnimationCallback = () => void;
export declare abstract class Ch5Animation {
    private _duration;
    private _defaultDuration;
    private _easeMode;
    private _wrapper;
    constructor(duration: number, easeMode: string, wrapper: HTMLElement);
    duration: number;
    defaultDuration: number;
    easeMode: string;
    wrapper: HTMLElement;
    abstract animate(element: HTMLElement, currentPosition: number, mode: TCh5ListElementOrientation, previousPosition?: number, callback?: TAnimationCallback): void;
}
