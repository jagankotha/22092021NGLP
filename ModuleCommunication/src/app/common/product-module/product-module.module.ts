import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { productService } from './product.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[productService],
  exports:[]
})
export class SharedModule { }
