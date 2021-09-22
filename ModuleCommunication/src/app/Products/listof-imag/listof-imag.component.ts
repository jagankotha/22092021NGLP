import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { productService } from 'src/app/common/product-module/product.service';

@Component({
  selector: 'app-listof-imag',
  templateUrl: './listof-imag.component.html',
  styleUrls: ['./listof-imag.component.css']
})
export class ListofImagComponent {

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
