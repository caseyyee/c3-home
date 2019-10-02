import { ICh5AttrsI18n } from '../_interfaces/ch5-custom-attrs/i-ch5-attrs-i18n';
import { SavedElementInfo } from '../_interfaces/ch5-custom-attrs/types/ch5-attr-i18n-types';
import { CustomAttribute } from '../_interfaces/ch5-custom-attrs/helpers/custom-attribute';
export declare class Ch5AttrsI18n extends CustomAttribute<string> implements ICh5AttrsI18n {
    static DATA_CH5_ATTR_NAME: string;
    static DATA_CH5_EL_ID_PREFIX: string;
    static RANDOM_NUMBER_LENGTH: number;
    static EXPECTED_SUBATTRIBUTE_POSITION: number;
    static SUBATTRIBUTE_TYPE: string;
    translatableData: SavedElementInfo[];
    private initialIndexValue;
    updateOnChange(): void;
    handleBeingAddedToDom(el: Element): void;
    private getTextDisplayInfo(attributeValue);
    private updateValueToDom(el, localeText, indexValue?);
    private checkElementExistInDom(uniqueElementId);
    private removeExtraNode();
    private getTranslatedValue(el, valueToTranslate, indexValue?);
    private doTranslation(valueToTranslate);
}
