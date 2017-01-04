import {
    Component, OnInit, OnDestroy, Input, NgModule, TemplateRef, HostListener,
    ViewContainerRef
} from '@angular/core';
import { MdKeyboardService } from './md-keyboard.service';
import { MaterialModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BehaviorSubject, Observable } from "rxjs";

@Component({
    selector: 'md-keyboard',
    templateUrl: './md-keyboard.component.html',
    styleUrls: ['./md-keyboard.component.scss']
})
export class MdKeyboardComponent implements OnInit, OnDestroy {
    layout;
    key: BehaviorSubject<string>;
    private capsLocked;
    private caps;

    constructor (private viewContainer: ViewContainerRef,
                 private keyboard: MdKeyboardService) {
        this.layout = keyboard.getLayout(keyboard.getCurrentLayout());
        this.key = new BehaviorSubject<string>('');

        this.key.withLatestFrom(
            this.keyboard.target,
            (key, target) => {
                let value = target.value || '';
                switch (key) {
                    case 'Caps':
                        this.capsLocked = !this.capsLocked;
                        this.caps = false;
                        break;

                    case 'Shift':
                        this.caps = !this.caps;
                        break;

                    case 'Alt':
                    case 'AltGr':
                    case 'AltLk':
                        break;

                    case 'Tab':
                        value = value + '\t';
                        break;


                    case 'Bksp':
                        value = value.slice(0, -1);
                        break;


                    case 'Enter':
                        // if (element[0].nodeName.toUpperCase() != 'TEXTAREA') {
                        //     $timeout(function () {
                        //         angular.element(element[0].form).triggerHandler('submit');
                        //     });
                        // } else {
                        value = value + '\n';
                        break;
                    // }

                    default:
                        this.caps = false;
                        value = value + key;
                        break;
                }
                target.value = value;
                return target;
            })
            .subscribe((target) => {
                this.keyboard.target.next(target);
            });
    }

    ngOnInit () {
    }

    ngOnDestroy () {

    }

    private isChild(node) {
        while (node = node.parentNode) {
            if (node === this.viewContainer.element.nativeElement.firstChild) {
                return true;
            }
        }
        return false;
    }

    private isInput(node) {
        return this.keyboard.inputs.indexOf(node) !== -1;
    }

    @HostListener('document:click', ['$event']) onBlur (event) {
        if (!this.isInput(event.target) && !this.isChild(event.target)) {
            this.keyboard.hide();
        }
    }

    getKeyClass (key) {
        var k = (key[0] || ' ').toLowerCase();
        var keys = ['bksp', 'tab', 'caps', 'enter', 'shift', 'alt', 'altgr', 'altlk'];

        // space bar
        if (k == ' ') {
            k = 'space';
        }
        // special key
        else if (keys.indexOf(k) < 0) {
            k = 'char';
        }
        // spacer helper element
        else if (k == 'spacer') {
            return k;
        }

        return 'key-' + k;
    }

    pressed (key) {
        this.key.next(key);
    }
}
