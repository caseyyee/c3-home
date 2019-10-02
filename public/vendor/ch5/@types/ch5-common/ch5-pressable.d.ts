import { Ch5Common } from '../ch5-common/ch5-common';
import 'hammerjs';
import HtmlCallback from './utils/html-callback';
export interface ICh5PressableOptions {
    cssTargetElement: HTMLElement;
    cssPressedClass: string;
}
export declare class Ch5Pressable {
    private _ch5Component;
    private _options;
    private _pressEvent;
    private _releaseEvent;
    private _touchStart;
    private _touchEnd;
    private _pressed;
    private _released;
    private _hammerManager;
    private _gestureableSubscription;
    private _onPressCallback;
    private _onReleaseCallback;
    constructor(component: Ch5Common, options?: ICh5PressableOptions);
    readonly ch5Component: Ch5Common;
    init(): void;
    destroy(): void;
    onPressCallback: HtmlCallback;
    onReleaseCallback: HtmlCallback;
    private _attachEvents();
    private _removeEvents();
    private _callbackRegistration();
    private _subscribeToGestureableProp();
    private _unsubscribeFromGestureableProp();
    private _attachEventsFromHammer();
    private _removeEventsFromHammer();
    private _onClick(inEvent);
    private _onMouseDown(inEvent);
    private _onMouseUp(inEvent);
    private _onMouseLeave(inEvent);
    private _onTouchStart(inEvent);
    private _onTouchEnd(inEvent);
    private _onTouchCancel(inEvent);
    private _onHold();
    private _onRelease();
    private _onPanEnd();
    private _addCssPressClass();
    private _removeCssPressClass();
}
