import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { SellComponent } from './components/sell/sell.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { ShopComponent } from './components/shop/shop.component';
import { RepairShopsComponent } from './components/repair-shops/repair-shops.component';
import { DisposalMethodsComponent } from './components/disposal-methods/disposal-methods.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardAvatar, MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { PCsComponent } from './components/products/pcs/pcs.component';
import { GPUComponent } from './components/products/gpu/gpu.component';
import { MonitorsComponent } from './components/products/monitors/monitors.component';
import { CPUComponent } from './components/products/cpu/cpu.component';
import { RAMComponent } from './components/products/ram/ram.component';
import { PowerSuppliesComponent } from './components/products/power-supplies/power-supplies.component';
import { StorageComponent } from './components/products/storage/storage.component';
import { PhonesComponent } from './components/products/phones/phones.component';
import { TabletsComponent } from './components/products/tablets/tablets.component';
import { KeyboardsComponent } from './components/products/keyboards/keyboards.component';
import { MiceComponent } from './components/products/mice/mice.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
import { provideMessaging,getMessaging } from '@angular/fire/messaging';
import { providePerformance,getPerformance } from '@angular/fire/performance';
import { provideRemoteConfig,getRemoteConfig } from '@angular/fire/remote-config';
import { provideStorage,getStorage } from '@angular/fire/storage';

@NgModule({
  declarations: [
    AppComponent,
    SellComponent,
    NavigationBarComponent,
    FooterComponent,
    LoginPageComponent,
    ShopComponent,
    RepairShopsComponent,
    DisposalMethodsComponent,
    AboutUsComponent,
    PCsComponent,
    GPUComponent,
    MonitorsComponent,
    CPUComponent,
    RAMComponent,
    PowerSuppliesComponent,
    StorageComponent,
    PhonesComponent,
    TabletsComponent,
    KeyboardsComponent,
    MiceComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule, 
    MatButtonModule,
    MatSidenavModule, 
    MatCardModule, 
    MatDialogModule,
    MatInputModule,
    MatTooltipModule,
    MatMenuModule,
    MatIconModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatButtonToggleModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    provideFunctions(() => getFunctions()),
    provideMessaging(() => getMessaging()),
    providePerformance(() => getPerformance()),
    provideRemoteConfig(() => getRemoteConfig()),
    provideStorage(() => getStorage())
  ],
  providers: [
    ScreenTrackingService,UserTrackingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
