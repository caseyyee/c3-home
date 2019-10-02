export interface IViewportDetails {
    width: number;
    height: number;
    heightCollapsedControls: number;
    scrollX: number;
    scrollY: number;
    resized: boolean;
    scrolled: boolean;
}
export declare function GetViewportDetails(): IViewportDetails;
