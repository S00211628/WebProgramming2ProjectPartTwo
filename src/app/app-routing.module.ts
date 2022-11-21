import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeliveryViewComponent } from './Components/delivery-view/delivery-view.component';

const routes: Routes = [
  {path: '', component:DeliveryViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
