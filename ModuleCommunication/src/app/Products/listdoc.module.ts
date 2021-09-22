import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../common/product-module/product-module.module';
import { ListofImagComponent } from './listof-imag/listof-imag.component';
import { RouterModule } from '@angular/router';
import { MastercomponentComponent } from './mastercomponent/mastercomponent.component';

@NgModule({
  declarations: [ListofImagComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    RouterModule.forChild([{ path: '', component: ListofImagComponent }]),
  ],
  providers: [],
  exports: [ListofImagComponent],
})
export class ListdocModule {}
