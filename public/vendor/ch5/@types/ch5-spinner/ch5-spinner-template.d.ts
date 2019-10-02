import { Ch5Spinner } from "./ch5-spinner";
export declare class Ch5SpinnerTemplate {
    static ERROR: {
        structure: string;
    };
    _templateDefined: boolean;
    private _element;
    private _wrapperElement;
    private _scrollableArea;
    private _highlightElement;
    private _overlayElement;
    private _templateElement;
    private _childrenObject;
    private _initialchildrenObject;
    private _appendedItemIndex;
    private _prependedItemIndex;
    _clonedItems: {
        prepended: HTMLElement[];
        appended: HTMLElement[];
        [key: string]: HTMLElement[];
    };
    constructor(element: Ch5Spinner);
    destruct(): void;
    element: Ch5Spinner;
    wrapperElement: HTMLElement;
    scrollableArea: HTMLElement;
    highlightElement: HTMLElement;
    templateElement: HTMLTemplateElement;
    childrenObject: [HTMLElement] | null;
    initialchildrenObject: [HTMLElement] | null;
    overlayElement: HTMLElement;
    appendedItemIndex: number;
    prependedItemIndex: number;
    addChild(child: HTMLElement): HTMLElement;
    generateTemplate(size: number): void;
    toggleOverlay(show?: boolean, onTop?: boolean): void;
    setActiveItem(item: number): void;
    getSelectedItem(index: number): HTMLElement | null;
    handleDefaultItemHeight(child: HTMLElement): void;
    resolveId(index: number, elements: NodeListOf<HTMLElement> | [HTMLElement]): DocumentFragment | undefined;
    iconPositioning(): void;
    protected pushElementToClonedItemsList(type: string | undefined, elementIndex: number, addOnTop?: boolean): void;
    protected invokeChildElement(index: number): void;
    protected checkTemplateDefined(): void;
    protected addDefaultTemplate(): void;
    protected cleanTheTemplate(): void;
    private removeActiveItemClass();
}
