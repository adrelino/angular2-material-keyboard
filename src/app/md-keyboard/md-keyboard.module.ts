import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { MdKeyboardService } from './md-keyboard.service';
import { MdKeyboardComponent } from './md-keyboard.component';
import { MdKeyboardDirective } from './md-keyboard.directive';
import { keyboardLayouts } from './constants/keyboard-layouts.constant';
import { keyboardDeadKey } from './constants/keyboard-dead-key.constant';
import { keyboardNumpad } from './constants/keyboard-numpad.constant';
import { keyboardSymbols } from './constants/keyboard-symbols.constant';

@NgModule({
    declarations: [
        MdKeyboardDirective,
        MdKeyboardComponent
    ],
    imports: [
        MaterialModule.forRoot(),
        BrowserModule
    ],
    exports: [
        MdKeyboardDirective,
        MdKeyboardComponent
    ],
    providers: [
        MdKeyboardService,
        {provide: 'Constants', useValue: {
            keyboardSymbols,
            keyboardNumpad,
            keyboardDeadKey,
            keyboardLayouts
        }}
    ]
})
export class MdKeyboardModule {
    config (configFn) {
        configFn.call(this);
        return this;
    }
}

