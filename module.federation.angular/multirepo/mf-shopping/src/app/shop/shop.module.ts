import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { ShowRoutingModule } from './shop.routing.module';

@NgModule({
  declarations: [
    ShopComponent
  ],
  imports: [
    CommonModule,
    ShowRoutingModule
  ],
  exports: [
    ShopComponent
  ]
})
export class ShopModule { }
