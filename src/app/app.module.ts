import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardUserModule } from '@aamdev/ngx-components/components/card-user';
import { TopButtonModule } from '@aamdev/ngx-components/components/top-button';
import { HighlightModule } from '@aamdev/ngx-components/directives/highlight';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TopButtonModule,
    CardUserModule,
    HttpClientModule,
    HighlightModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
