import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { productService } from '../common/product-module/product.service';

@Component({
  selector: 'app-spec',
  templateUrl: './spec.component.html',
  styleUrls: ['./spec.component.css']
})
export class SpecComponent implements OnInit {

  vmsList:Array<any> = [];
  constructor(private service:productService){}
  ngOnInit(){
      this.service.getProducts().subscribe((posRes)=>{
          this.vmsList = posRes;
      },(errRes:HttpErrorResponse)=>{
          console.log(errRes);
      });
  }
}
