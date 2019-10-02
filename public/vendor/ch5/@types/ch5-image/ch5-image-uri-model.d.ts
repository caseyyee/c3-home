export declare class Ch5ImageUriModel {
    protected _schema: string;
    protected _user: string;
    protected _password: string;
    protected _location: string;
    constructor(schema: string, user: string, password: string, location: string);
    schema: string;
    user: string;
    password: string;
    location: string;
    toString(): string;
    isValidAuthenticationUri(): boolean;
}
