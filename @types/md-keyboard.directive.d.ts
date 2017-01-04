import { ViewContainerRef, EventEmitter } from '@angular/core';
import { MdKeyboardService } from "./md-keyboard.service";
export declare class MdKeyboardDirective {
    private viewContainer;
    private keyboard;
    mdKeyboard: string;
    mdKeyboardChange: EventEmitter<string>;
    constructor(viewContainer: ViewContainerRef, keyboard: MdKeyboardService);
    onFocus($event: any): void;
}
