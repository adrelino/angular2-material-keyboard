import {
    Directive, Input, Output, ViewContainerRef, EventEmitter, Compiler, HostListener, ReflectiveInjector
} from '@angular/core';
import { MdKeyboardService } from "./md-keyboard.service";
import { debug } from "util";

@Directive({
    selector: '[mdKeyboard]'
})
export class MdKeyboardDirective {
    @Input() mdKeyboard: string;
    @Output() mdKeyboardChange: EventEmitter<string>;

    constructor (private viewContainer: ViewContainerRef,
                 private keyboard: MdKeyboardService) {
        this.mdKeyboardChange = new EventEmitter<string>();

        this.keyboard.target.subscribe((target) => {
            if (target === this.viewContainer.element.nativeElement) {
                this.mdKeyboardChange.emit(target.value);
            }
        });

        this.keyboard.addInput(this.viewContainer.element.nativeElement);
    }

    @HostListener('focus', ['$event']) onFocus ($event) {

        this.keyboard.target.next($event.target);
        this.keyboard.show();
    }
}
