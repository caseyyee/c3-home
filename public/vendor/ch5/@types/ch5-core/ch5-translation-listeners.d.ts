import i18next from "i18next";
export declare class Ch5TranslationListeners {
    translator: i18next.i18n;
    constructor(translator: i18next.i18n);
    protected init(): void;
    protected onInitialized(options: i18next.TOptions): void;
    protected onLanguageChanged(lng: string): void;
    protected onLoaded(loaded: boolean): void;
    protected onAdded(lng: string, ns: string): void;
    protected translate(language?: string): void;
}
