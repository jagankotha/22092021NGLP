import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../common/product-module/product-module.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { SpecComponent } from './spec.component';
import { FormsModule } from '@angular/forms';
import { SpecCreateComponent } from './spec-create/spec-create.component';
import { SpecListComponent } from './spec-list/spec-list.component';
import { SpecEditComponent } from './spec-edit/spec-edit.component';
import { SpecDeleteComponent } from './spec-delete/spec-delete.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  
];

@NgModule({
  declarations: [
    SpecComponent,
    SpecCreateComponent,
    SpecListComponent,
    SpecEditComponent,
    SpecDeleteComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild([{ path:'', component: HomeComponent },
    {
      path: "create",
      component: SpecCreateComponent,
    },
    {
      path: "edit",
      component: SpecEditComponent,
    },
    {
      path: "delete",
      component: SpecDeleteComponent,
    },
    {
      path: "list",
      component: SpecListComponent,
    }]),
  ],
  providers: [],
  exports: [SpecComponent],
  bootstrap:[HomeComponent]
})
export class SpecilizationModule {}
