import { ICh5SliderAttributes } from "./i-ch5-slider-attributes";
import { ICh5Common } from "../ch5-common";
export interface ICh5Slider extends ICh5SliderAttributes, ICh5Common {
    onclean: string;
    ondirty: string;
}
