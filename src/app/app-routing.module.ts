import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { DisposalMethodsComponent } from './components/disposal-methods/disposal-methods.component';
import { RepairShopsComponent } from './components/repair-shops/repair-shops.component';
import { SellComponent } from './components/sell/sell.component';
import { ShopComponent } from './components/shop/shop.component';

const routes: Routes = [
  { path: 'sell', component: SellComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'repair-shops', component: RepairShopsComponent },
  { path: 'disposal', component: DisposalMethodsComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: '', redirectTo: '/shop', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
