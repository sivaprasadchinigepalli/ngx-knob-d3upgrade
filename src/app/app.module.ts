import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { KnobModule } from '../../projects/knob/src/public_api';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule.withConfig({ useColumnBasisZero: false }),
    KnobModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
