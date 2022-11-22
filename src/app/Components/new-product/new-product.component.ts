import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Params, Router } from '@angular/router';
import { SuppliersService } from 'src/app/Services/suppliers.service';
import { WebRequestService } from 'src/app/Services/web-request.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss'],
})
export class NewProductComponent implements OnInit {
  constructor(private _webService:WebRequestService, private _supplierService:SuppliersService, private _activatedRouter:ActivatedRoute, private _router:Router ) {}

  supplierId!:string;

  ngOnInit(): void {
     this._activatedRouter.params.subscribe((params: Params) => {
       this.supplierId = params['supplierId'];
     });
      

  }

  crateProduct(title: string, description:string, price:string){
    this._supplierService.createProduct(title,  this.supplierId, description, price).subscribe((newProduct: any) =>{
      this._router.navigate(['../'], {relativeTo:this._activatedRouter});
    });


  }
}
