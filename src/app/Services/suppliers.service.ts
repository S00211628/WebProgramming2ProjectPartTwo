import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root',
})
export class SuppliersService {
  constructor(private _webReqService: WebRequestService) {}

  createSupplier(SupplierName: string) {
    // we want to send a web request to crate a list
    return this._webReqService.post('suppliers', { SupplierName });
  }

  getSuppliers() {
    return this._webReqService.get('suppliers');
  }

  getProducts(supplierId: string) {
    return this._webReqService.get(`suppliers/${supplierId}/products`) as any;
  }

  createProduct(title: string, supplierId: string, Description:string, Price:string) {
    // we want to send a web request to crate a product
    return this._webReqService.post(`suppliers/${supplierId}/products`, {title, supplierId, Description, Price});
  }
}
