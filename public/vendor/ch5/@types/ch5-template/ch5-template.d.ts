import { Ch5Common } from "../ch5-common/ch5-common";
import { ICh5TemplateAttributes } from "../_interfaces/ch5-template/i-ch5-template-attributes";
export declare class Ch5Template extends Ch5Common implements ICh5TemplateAttributes {
    static CH5_TEMPLATE_STYLE_CLASS: string;
    private _templateId;
    private _context;
    private _templateHelper;
    static readonly observedAttributes: string[];
    templateId: string;
    context: string;
    connectedCallback(): void;
    protected initAttributes(): void;
    private initializations();
    attributeChangedCallback(attr: string, oldValue: string, newValue: string): void;
}
