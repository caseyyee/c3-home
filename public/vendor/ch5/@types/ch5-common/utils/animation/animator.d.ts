export interface IScrollableArea {
    class: ScrollableArea;
    element: HTMLElement | Window;
}
export interface IScrollableAreaOptions {
    offset?: Position;
    duration?: DurationRange | number;
    easing?: Easing;
    cancelOnUserScroll?: boolean;
    animate?: boolean;
    autoDurationMultiplier?: number;
}
export interface IOptions extends IScrollableAreaOptions {
    scrollContainer?: HTMLElement | Window;
}
export interface IMergedOptions {
    offset: Position;
    duration: DurationRange | number;
    easing: Easing;
    cancelOnUserScroll: boolean;
    animate: boolean;
    autoDurationMultiplier: number;
}
export declare type Position = [number, number];
export declare type DurationRange = [number, number];
export declare enum Easing {
    easeInQuad = "easeInQuad",
    easeOutQuad = "easeOutQuad",
    easeInOutQuad = "easeInOutQuad",
    easeInCubic = "easeInCubic",
    easeOutCubic = "easeOutCubic",
    easeInOutCubic = "easeInOutCubic",
    easeInQuart = "easeInQuart",
    easeOutQuart = "easeOutQuart",
    easeInOutQuart = "easeInOutQuart",
    easeInQuint = "easeInQuint",
    easeOutQuint = "easeOutQuint",
    easeInOutQuint = "easeInOutQuint",
    easeInSine = "easeInSine",
    easeOutSine = "easeOutSine",
    easeInOutSine = "easeInOutSine",
    easeInExpo = "easeInExpo",
    easeOutExpo = "easeOutExpo",
    easeInOutExpo = "easeInOutExpo",
    easeInCirc = "easeInCirc",
    easeOutCirc = "easeOutCirc",
    easeInOutCirc = "easeInOutCirc",
    easeInElastic = "easeInElastic",
    easeOutElastic = "easeOutElastic",
    easeInOutElastic = "easeInOutElastic",
    easeInBack = "easeInBack",
    easeOutBack = "easeOutBack",
    easeInOutBack = "easeInOutBack",
    easeInBounce = "easeInBounce",
    easeOutBounce = "easeOutBounce",
    easeInOutBounce = "easeInOutBounce",
}
export declare class ScrollableArea {
    private scrollContainer;
    private ticking;
    private _scrolling;
    private scrollFrom;
    private scrollTo;
    private duration;
    private timestamp;
    private scrollX;
    private scrollY;
    private easing;
    private resolve;
    constructor(scrollContainer: HTMLElement | Window);
    ScrollToTarget(target: Position | HTMLElement, options?: IScrollableAreaOptions): Promise<void>;
    private scrolling;
    private setScrollPosition();
    private addEventListeners();
    private removeEventListeners();
    private cancelScroll();
    private tick();
    private scroll();
    private calculateNextPosition(index, elapsed);
}
export declare function ScrollTo(target: Position | HTMLElement, options?: IOptions): Promise<void>;
