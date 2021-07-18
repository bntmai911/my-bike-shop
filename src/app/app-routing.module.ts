import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateNewOrderComponent } from './create-new-order/create-new-order.component';
import { FinanceComponent } from './finance/finance.component';
import { HomePageComponent } from './home-page/home-page.component';
import { StorageManagementComponent } from './storage-management/storage-management.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'new-order', component: CreateNewOrderComponent },
  { path: 'finance', component: FinanceComponent },
  { path: 'manage-store', component: StorageManagementComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
