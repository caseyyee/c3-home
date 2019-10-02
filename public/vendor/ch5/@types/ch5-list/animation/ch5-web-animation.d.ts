import { Ch5Animation, TAnimationCallback } from "./ch5-animation";
import { TCh5ListElementOrientation } from "../../_interfaces/ch5-list/types";
export declare class Ch5WebAnimation extends Ch5Animation {
    private _animation;
    animate(element: HTMLElement, currentPosition: number, mode: TCh5ListElementOrientation, previousPosition?: number, callback?: TAnimationCallback): void;
    resetAnimation(): void;
}
