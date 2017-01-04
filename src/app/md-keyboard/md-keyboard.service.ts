import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from "rxjs";


@Injectable()
export class MdKeyboardService {
    visible: BehaviorSubject<boolean>;
    inputs;
    target: Subject<any>;
    private CLOSING_VELOCITY;
    private PADDING; // same as css
    private DEFAULT_LAYOUT;
    private CURRENT_LAYOUT;
    private LAYOUTS;
    private DEADKEY;
    private SYMBOLS;
    private NUMPAD;
    private VISIBLE = false;

    constructor (@Inject('Constants') constants) {

        this.visible = new BehaviorSubject<boolean>(false);
        this.target = new Subject<any>();
        this.inputs = [];


        this.CLOSING_VELOCITY = 0.5;
        this.PADDING = 80; // same as css
        this.DEFAULT_LAYOUT = 'US International';
        this.CURRENT_LAYOUT = this.DEFAULT_LAYOUT;
        this.LAYOUTS = constants.keyboardLayouts;
        this.DEADKEY = constants.keyboardDeadKey;
        this.SYMBOLS = constants.keyboardSymbols;
        this.NUMPAD = constants.keyboardNumpad;
        this.VISIBLE = false;
    }

    show () {
        this.visible.next(true);
    }

    addInput (input) {
        this.inputs.push(input);
    }

    hide () {
        this.visible.next(false);
    }

    getCurrentLayout () {
        return this.CURRENT_LAYOUT;
    }

    // get currently used layout object
    getLayout (layout) {
        if (this.LAYOUTS[layout]) {
            return this.LAYOUTS[layout];
        }
    }

    // get names of available layouts
    getLayouts () {
        var layouts = [];
        this.LAYOUTS.forEach(function (obj, layout) {
            layouts.push(layout);
        });
        return layouts;
    }

    // set default layout
    defaultLayout (layout) {
        if (this.LAYOUTS[layout]) {
            this.DEFAULT_LAYOUT = layout;
            this.CURRENT_LAYOUT = layout;
        } else {
            if (layout.length) {
                var msg = "" +
                    "The keyboard layout '" + layout + "' does not exists. \n" +
                    "The default layout \"" + this.DEFAULT_LAYOUT + "\" will be used.\n" +
                    "To get a list of the available layouts use 'showLayouts'.";
                console.warn(msg);
            }
        }
    }

    // set name of layout to use
    useLayout (layout) {
        if (layout && this.LAYOUTS[layout]) {
            this.CURRENT_LAYOUT = layout;
        } else {
            this.CURRENT_LAYOUT = this.DEFAULT_LAYOUT;
            if (layout.length) {
                var msg = "" +
                    "The keyboard layout '" + layout + "' does not exists. \n" +
                    "The default layout \"" + this.DEFAULT_LAYOUT + "\" will be used.\n" +
                    "To get a list of the available layouts use 'showLayouts'.";
                console.warn(msg);
            }
        }
        // // broadcast new layout
        // if (SCOPE) {
        //     SCOPE.$broadcast('$mdKeyboardLayoutChanged', this.CURRENT_LAYOUT);
        // }
    }

    // add a custom layout
    addLayout (layout, keys) {
        if (!layout) return;
        if (!this.LAYOUTS[layout]) {
            this.LAYOUTS[layout] = keys;
        } else {
            var msg = "" +
                "The keyboard layout '" + layout + "' already exists. \n" +
                "Please use a different name.";
            console.warn(msg);
        }
    }
}
