/** 
 * This module is the entry for your App.
 * 
 * Make sure to use the 3 constant APP_ imports so you don't have to keep
 * track of your root app dependencies here. Only import directly in this file if
 * there is something that is specific to the environment.  
 */

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { HttpModule } from '@angular/http';

import { APP_DECLERATIONS } from './app.declerations';
import { APP_IMPORTS } from './app.imports';
import { APP_PROVIDERS } from './app.providers';

import { AppComponent } from './app.component';

// TODO: this fixes the error "Cannot find namespace 'firebase'."
//       Need for applications since errors fail build process
import 'firebase';

@NgModule({
  declarations: [
    AppComponent,
    APP_DECLERATIONS
  ],
  imports: [
    APP_IMPORTS,
    BrowserModule
  ],
  bootstrap: [AppComponent],
  providers: [APP_PROVIDERS]
})

export class AppModule {}
