import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../common/product-module/product-module.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { SpecComponent } from './spec.component';

@NgModule({
  declarations: [SpecComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    RouterModule.forChild([{ path: '', component: SpecComponent }]),
  ],
  providers: [],
  exports: [SpecComponent],
})
export class SpecilizationModule {}
