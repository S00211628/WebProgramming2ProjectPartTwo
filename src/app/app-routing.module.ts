import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeliveryViewComponent } from './Components/delivery-view/delivery-view.component';
import { NewProductComponent } from './components/new-product/new-product.component';
import { NewSupplierComponent } from './components/new-supplier/new-supplier.component';

const routes: Routes = [
  {path: '', component:DeliveryViewComponent},
  {path: '',redirectTo: 'suppliers', pathMatch: 'full'},
  {path: 'new-supplier',component: NewSupplierComponent },
  {path: 'suppliers/:supplierId', component: DeliveryViewComponent},
  {path: 'suppliers/:supplierId/new-product', component: NewProductComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
