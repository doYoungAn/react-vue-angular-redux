import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './../store/reducer';

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        StoreModule.forRoot({ main: reducers })
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {}
