import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from "rxjs";
export declare class MdKeyboardService {
    visible: BehaviorSubject<boolean>;
    inputs: any;
    target: Subject<any>;
    private CLOSING_VELOCITY;
    private PADDING;
    private DEFAULT_LAYOUT;
    private CURRENT_LAYOUT;
    private LAYOUTS;
    private DEADKEY;
    private SYMBOLS;
    private NUMPAD;
    private VISIBLE;
    constructor(constants: any);
    show(): void;
    addInput(input: any): void;
    hide(): void;
    getCurrentLayout(): any;
    getLayout(layout: any): any;
    getLayouts(): any[];
    defaultLayout(layout: any): void;
    useLayout(layout: any): void;
    addLayout(layout: any, keys: any): void;
}
