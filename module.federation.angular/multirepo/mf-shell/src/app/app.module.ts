import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';

// import { ShopModule } from 'mfShopping/ShopModule';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    //ShopModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
