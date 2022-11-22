import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { SuppliersService } from 'src/app/Services/suppliers.service';

@Component({
  selector: 'app-delivery-view',
  templateUrl: './delivery-view.component.html',
  styleUrls: ['./delivery-view.component.scss'],
})
export class DeliveryViewComponent implements OnInit {

  suppliers?:any[];
  products?:any[];
  constructor(private _supplierService:SuppliersService, private _router:ActivatedRoute) {}

  ngOnInit(): void {
    this._router.params.subscribe(
      (params:Params) =>{
        this._supplierService.getProducts(params['supplierId']).subscribe((products: any[]) => {
          this.products = products;
        })
      }


    )

    this._supplierService.getSuppliers().subscribe((suppliers:any) =>{
      this.suppliers = suppliers;
    })

  }

  



  
}
