import { Component } from '@angular/core';
import { MdKeyboardService } from './md-keyboard/md-keyboard.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    text: string;
    text2: string;
    numbers: string;
    keyboardVisible: boolean;

    constructor (private mdKeyboard: MdKeyboardService) {
        this.text = 'Google';
        this.text2 = 'Amazon';
        this.numbers = '';


        mdKeyboard.visible.subscribe(visibility => {
            this.keyboardVisible = visibility;
        })
    }

    hideKeyboard () {
        this.mdKeyboard.visible.next(false);
    }

}
