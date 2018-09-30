import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdvFormComponentsModule } from 'adv-form-components';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AdvFormComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
