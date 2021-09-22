import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../common/product-module/product-module.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { DocuterComponent } from './docuter/docuter.component';



@NgModule({
  declarations: [DocuterComponent],
  imports: [
    CommonModule, HttpClientModule,SharedModule, RouterModule.forChild([{path:"", component:DocuterComponent}])
  ],
  providers:[],
  exports:[DocuterComponent]
})
export class DoctormoduleModule { }
