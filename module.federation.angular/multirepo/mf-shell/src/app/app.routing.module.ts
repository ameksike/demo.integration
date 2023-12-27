import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'shop',
    loadChildren: () => import('mfShopping/ShopModule').then(m => m.ShopModule)
  },
  {
    path: 'pay',
    loadChildren: () => import('mfPayment/PayModule').then(m => m.PayModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
