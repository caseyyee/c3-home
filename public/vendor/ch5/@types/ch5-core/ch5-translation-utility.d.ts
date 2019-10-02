import i18next from 'i18next';
export declare class Ch5TranslationUtility {
    private static _instance;
    _translatorBeginKey: string;
    _translatorEndKey: string;
    static getInstance(): Ch5TranslationUtility;
    constructor();
    getTranslator(): i18next.i18n;
    valuesToTranslation(valueToTranslation: string): RegExpMatchArray | null;
    hasMultipleIdentifiers(valueToTranslation: string): boolean;
    isTranslationIdentifier(value: string): boolean;
    stripDownTranslationCharacters(value: string): string;
    translatorBeginKey: string;
    translatorEndKey: string;
    private _t(valueToTranslate);
    translatedValue(valueToTranslate: string): string;
}
