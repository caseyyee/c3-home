export interface IMousePosition {
    start: {
        x: number;
        y: number;
        time: Date;
    };
    end: {
        x: number;
        y: number;
        time: Date;
    };
}
export declare class Ch5MouseVelocity implements IMousePosition {
    start: {
        x: number;
        y: number;
        time: Date;
    };
    end: {
        x: number;
        y: number;
        time: Date;
    };
    step: number;
    constructor(step: number);
    static calculateVelocity(start: number, end: number, step: number, timeDiff: number): number;
    readonly x1: number;
    readonly y1: number;
    readonly x2: number;
    readonly y2: number;
    readonly timeStart: number;
    readonly timeEnd: number;
    readonly timeDiff: number;
    getYSteps(): number;
}
