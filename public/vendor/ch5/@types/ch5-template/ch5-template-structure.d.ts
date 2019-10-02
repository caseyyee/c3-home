import { Ch5Template } from "./ch5-template";
export declare class Ch5TemplateStructure {
    private _element;
    private _templateElement;
    private _wrapperDiv;
    constructor(element: Ch5Template);
    element: Ch5Template;
    templateElement: HTMLTemplateElement;
    private setDefaultElementStyle();
    private initializeWrapperDiv();
    private getTemplateContent(templateId);
    generateTemplate(templateId: string, context: string): void;
}
