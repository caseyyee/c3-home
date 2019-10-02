import { Ch5List } from "./ch5-list";
import { Ch5ListAbstractHelper } from "./ch5-list-abstract-helper";
import { TCh5ListElementOrientation } from "../_interfaces/ch5-list/types";
import { Ch5Animation, TAnimationCallback } from "./animation/ch5-animation";
export declare const defaultTransitionDuration = 0;
export declare type TAnimateCallback = (element: HTMLElement, currentPosition: number, mode: TCh5ListElementOrientation, previousPosition?: number, callback?: TAnimationCallback) => void;
export declare const _swipeSensitivity = 40;
export declare class Ch5ListAnimation extends Ch5ListAbstractHelper {
    disableAnimation: boolean;
    animationAPI: Ch5Animation;
    animationFrame: number;
    maxOffsetTranslate: number | undefined;
    minOffsetTranslate: number;
    constructor(list: Ch5List, animationApi?: Ch5Animation);
    stop(): void;
    onFinishAnimation(): void;
    addAnimationApi(api: Ch5Animation): boolean;
    startDecelerating(): void;
    listDeceleration(): void;
    fixOffset(coord: number): number;
    signalScrollTo(position: number): void;
    slideTo(coord: number): void;
    updateDragPosition(newPosition: number, animate?: TAnimateCallback): void;
    private _infiniteLoopManager(newPosition);
    private stackInfinite();
    private queueInfinite();
    private _calculateNextPosition();
}
