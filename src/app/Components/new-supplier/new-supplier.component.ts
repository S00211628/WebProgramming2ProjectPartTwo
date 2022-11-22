import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SuppliersService } from 'src/app/Services/suppliers.service';

@Component({
  selector: 'app-new-supplier',
  templateUrl: './new-supplier.component.html',
  styleUrls: ['./new-supplier.component.scss'],
})
export class NewSupplierComponent implements OnInit {
  constructor(private _supplierService:SuppliersService, private _router:Router) {}

  ngOnInit(): void {}

  createSupplier(SupplierName: string) {
    this._supplierService.createSupplier(SupplierName).subscribe((supplier: any) => {
      // Now we navigate to /suppliers/response._id
      this._router.navigate(['/suppliers', supplier._id]);
    });
  }
}
