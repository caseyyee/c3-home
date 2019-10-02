import i18next from 'i18next';
export declare class Ch5TranslationFactory {
    receiveUpdateSub: string;
    protected _translator: i18next.i18n;
    translator: i18next.i18n;
    private runListeners();
}
export declare const translationFactory: Ch5TranslationFactory;
export declare const languageChangedSignalName = "language_changed";
