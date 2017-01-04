import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { MdKeyboardModule } from './md-keyboard/md-keyboard.module';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        MaterialModule.forRoot(),
        MdKeyboardModule,
        BrowserModule,
        FormsModule,
        HttpModule

    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

