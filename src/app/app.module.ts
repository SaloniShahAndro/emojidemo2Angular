import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { EmojiModule } from '@ctrl/ngx-emoji-mart/ngx-emoji'
import { FormsModule } from '@angular/forms';

import { Ng2EmojiModule } from 'ng2-emoji';
import { FileComponent } from './file/file.component';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ChangeTextDirective } from './change-text.directive';
import { AsyncdemoComponent } from './asyncdemo/asyncdemo.component';
import { RainbowDirective } from './rainbow.directive';
import { ChildcompComponent } from './childcomp/childcomp.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { GooglePlacesDirective } from './google-places.directive';
import { BaconDirective } from './bacon.directive';



@NgModule({
  declarations: [
    AppComponent,
    FileComponent,
    ChangeTextDirective,
    AsyncdemoComponent,
    RainbowDirective,
    ChildcompComponent,
    AutocompleteComponent,
    GooglePlacesDirective,
    BaconDirective
  ],
  imports: [
    BrowserModule,
    PickerModule,
    FormsModule,
    EmojiModule,
    Ng2EmojiModule.forRoot(),
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
