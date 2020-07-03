import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AquamdModule } from './aquamd/aquamd.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AquamdModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
