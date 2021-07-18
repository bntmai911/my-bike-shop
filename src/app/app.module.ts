import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateNewOrderComponent } from './create-new-order/create-new-order.component';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { HomePageComponent } from './home-page/home-page.component';
import { FinanceComponent } from './finance/finance.component';
import { StorageManagementComponent } from './storage-management/storage-management.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateNewOrderComponent,
    HomePageComponent,
    FinanceComponent,
    StorageManagementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
