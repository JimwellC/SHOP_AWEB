import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './admin/home/home.component';
import { AboutComponent } from './admin/about/about.component';
import { EmpListComponent } from './admin/emp-list/emp-list.component';
import { ProductComponent } from './admin/product/product.component';
import { ErrorComponent } from './admin/error/error.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'emplist', component: EmpListComponent },
  { path: 'product', component: ProductComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
