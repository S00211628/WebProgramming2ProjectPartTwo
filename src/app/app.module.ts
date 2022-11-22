import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeliveryViewComponent } from './Components/delivery-view/delivery-view.component';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { NewSupplierComponent } from './components/new-supplier/new-supplier.component';
import { NewProductComponent } from './components/new-product/new-product.component';

@NgModule({
  declarations: [
    AppComponent,
    DeliveryViewComponent,
    NewSupplierComponent,
    NewProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
