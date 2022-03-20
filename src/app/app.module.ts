import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import * as icons from '../utils/fontAwesomeIcons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShareButtonsModule,
    ShareIconsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(icons);
  }
 }
