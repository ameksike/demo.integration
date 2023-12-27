import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { loadRemoteModule } from '@angular-architects/module-federation';

const routes: Routes = [
  /*{
    path: 'shop',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        // remoteName: 'mfShopping',
        remoteEntry: 'http://localhost:4202/remoteEntry.js',
        exposedModule: './ShopModule',
      }).then(m => m.ShopModule),
  },*/
  {
    path: 'shop',
    loadChildren: () => import('mfShopping/ShopModule').then(m => m.ShopModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
