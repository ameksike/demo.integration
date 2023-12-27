import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PayComponent } from './pay.component';
import { PayRoutingModule } from './pay.routing.module';

@NgModule({
  declarations: [
    PayComponent
  ],
  imports: [
    CommonModule,
    PayRoutingModule
  ],
  exports: [
    PayComponent
  ]
})
export class PayModule { }
