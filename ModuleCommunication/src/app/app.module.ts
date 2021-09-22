import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListofImagComponent } from './Products/listof-imag/listof-imag.component';
import { RouterModule } from '@angular/router';
import { MastercomponentComponent } from './Products/mastercomponent/mastercomponent.component';
import { HttpClientModule } from '@angular/common/http';
import { DocuterComponent } from './DocModule/docuter/docuter.component';

@NgModule({
  declarations: [
    AppComponent,
    MastercomponentComponent
   
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path:"list", loadChildren:()=>import("./Products/listdoc.module").then(m=>m.ListdocModule)
      },
      {
        path:"specilization", loadChildren:()=>import("./SpecModule/specilization.module").then(m=>m.SpecilizationModule)
      },
      {
        path:"doctor", loadChildren:()=>import("./DocModule/doctormodule.module").then(m=>m.DoctormoduleModule)
      }
    ])
  ],
  providers: [],
  bootstrap: [MastercomponentComponent]
})
export class AppModule { }
