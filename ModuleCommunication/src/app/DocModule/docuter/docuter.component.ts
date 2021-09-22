import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { productService } from 'src/app/common/product-module/product.service';

@Component({
  selector: 'app-docuter',
  templateUrl: './docuter.component.html',
  styleUrls: ['./docuter.component.css']
})
export class DocuterComponent{
  
  public docterList:Array<any>=[];
  constructor(private _service:productService) { }

  ngOnInit() {
    
    this._service.getProducts().subscribe((posRes)=>{
      this.docterList = posRes;
    },(err:HttpErrorResponse)=>{
      console.log(err);
    });


  }

}
