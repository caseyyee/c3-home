export declare class Ch5ButtonPressInfo {
    private readonly _threshold;
    private _startX;
    private _startY;
    private _endX;
    private _endY;
    valid(): boolean;
    saveStart(x: number, y: number): void;
    saveEnd(x: number, y: number): void;
    startX: number;
    startY: number;
    endX: number;
    endY: number;
    private calculatePointDiff();
}
