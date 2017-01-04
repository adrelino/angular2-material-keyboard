import { OnInit, OnDestroy, ViewContainerRef } from '@angular/core';
import { MdKeyboardService } from './md-keyboard.service';
import { BehaviorSubject } from "rxjs";
export declare class MdKeyboardComponent implements OnInit, OnDestroy {
    private viewContainer;
    private keyboard;
    layout: any;
    key: BehaviorSubject<string>;
    private capsLocked;
    private caps;
    constructor(viewContainer: ViewContainerRef, keyboard: MdKeyboardService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    private isChild(node);
    private isInput(node);
    onBlur(event: any): void;
    getKeyClass(key: any): any;
    pressed(key: any): void;
}
