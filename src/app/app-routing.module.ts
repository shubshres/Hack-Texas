import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { DisposalMethodsComponent } from './components/disposal-methods/disposal-methods.component';
import { CPUComponent } from './components/products/cpu/cpu.component';
import { GPUComponent } from './components/products/gpu/gpu.component';
import { KeyboardsComponent } from './components/products/keyboards/keyboards.component';
import { MiceComponent } from './components/products/mice/mice.component';
import { MonitorsComponent } from './components/products/monitors/monitors.component';
import { PCsComponent } from './components/products/pcs/pcs.component';
import { PhonesComponent } from './components/products/phones/phones.component';
import { PowerSuppliesComponent } from './components/products/power-supplies/power-supplies.component';
import { RAMComponent } from './components/products/ram/ram.component';
import { StorageComponent } from './components/products/storage/storage.component';
import { TabletsComponent } from './components/products/tablets/tablets.component';
import { RepairShopsComponent } from './components/repair-shops/repair-shops.component';
import { SellComponent } from './components/sell/sell.component';
import { ShopComponent } from './components/shop/shop.component';


const routes: Routes = [
  { path: 'sell', component: SellComponent },
  { path: 'shop', redirectTo: '/shop/pcs', pathMatch: 'full'},
  { path: 'shop/cpus', component: CPUComponent },
  { path: 'shop/gpus', component: GPUComponent },
  { path: 'shop/keyboards', component: KeyboardsComponent },
  { path: 'shop/mice', component: MiceComponent },
  { path: 'shop/monitors', component: MonitorsComponent },
  { path: 'shop/pcs', component: PCsComponent },
  { path: 'shop/phones', component: PhonesComponent },
  { path: 'shop/power-supplies', component: PowerSuppliesComponent },
  { path: 'shop/ram', component: RAMComponent },
  { path: 'shop/storage', component: StorageComponent },
  { path: 'shop/tablets', component: TabletsComponent },
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
