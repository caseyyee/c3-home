import { ICh5ListItemInfo } from './ch5-list';
import { Ch5ListAbstractHelper } from './ch5-list-abstract-helper';
import { TAnimateCallback } from './ch5-list-animation';
export interface ICh5ListStylesheet {
    [key: string]: any;
}
export declare class Ch5ListTemplate extends Ch5ListAbstractHelper {
    scrollbarSize: number;
    private _tmplString;
    private _scrollbarElement;
    private _lastScrollbarPosition;
    private resizingInProgress;
    private resizeDebouncer;
    scrollbarElement: HTMLElement | null;
    checkForTemplate(): string;
    updateTemplateString(tmplString: string): void;
    processTemplate(uid: string, index: number, templateVars: string | null): HTMLElement;
    listItemCSS(): {
        display: string;
        width: string;
        height: string;
    };
    attachCSS(): void;
    updateListMainElStyle(): void;
    addUniqueClass(newClass: string): boolean;
    resizeList(element: HTMLElement, templateVars: string | null, sizeReceivedFromSig?: number): void;
    triggerResizeDueWidthAndHeightUpdates(): void;
    removeScrollbar(): void;
    customScrollbar(additionalElement: HTMLElement): void;
    _updateScrollBarPosition(newPosition: number, animate?: TAnimateCallback): void;
    setWrapperTranslateX(tx: number, animate?: TAnimateCallback): void;
    setWrapperTranslateY(ty: number, animate?: TAnimateCallback): void;
    setItemTranslateX(tx: number, item: ICh5ListItemInfo): void;
    setItemTranslateY(ty: number, item: ICh5ListItemInfo): void;
    computePage(coord: number, start?: number, end?: number): number;
    checkAndSetSizes(): void;
    private getRelativeScrollbarPosition(position, listSize, viewPortsize);
    private computeItemLocation(currentListPosition);
    private processTemplateForVars(template, currentVars);
    private textReplace(fullText, toReplace, replaceWith, replaceGlobal);
    private createScrollbar();
    private prepareStyleSheet();
    private initListMaxWidthAndHeight();
}
