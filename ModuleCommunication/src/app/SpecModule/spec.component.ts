import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Product from '../common/product-module/product.model';
import { productService } from '../common/product-module/product.service';

@Component({
  selector: 'app-spec',
  templateUrl: './spec.component.html',
  styleUrls: ['./spec.component.css']
})
export class SpecComponent implements OnInit {

  vmsList:Array<any> = [];
  constructor(private service:productService, private _http:HttpClient){}
  ngOnInit(){
   //this.onLoad();  
   this.onModuleInit();
  }
  
  onLoad(){
    this.service.getProducts().subscribe((posRes)=>{
      this.vmsList = posRes;
  },(errRes:HttpErrorResponse)=>{
      console.log(errRes);
  });
  }

  
  onModuleInit(){
    this._http.get("http://localhost:8989/specilization/findAll").subscribe((posRes:any)=>{
     this.vmsList =posRes;
    },(err:HttpErrorResponse)=>{
      console.log("getting error while featching the data...");
    })
  }
}
