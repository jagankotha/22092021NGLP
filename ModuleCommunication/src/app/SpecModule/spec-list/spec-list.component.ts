import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spec-list',
  templateUrl: './spec-list.component.html',
  styleUrls: ['./spec-list.component.css']
})
export class SpecListComponent implements OnInit {
  public specList: any;
  

  constructor(private _http: HttpClient) { }

  ngOnInit(): void {
    this.onModuleInit();
  }
  onModuleInit(){
    this._http.get("http://localhost:8989/specilization/findAll").subscribe((posRes:any)=>{
      console.log("speclist data getting....");
     this.specList =posRes;
    },(err:HttpErrorResponse)=>{
      console.log("getting error while featching the data...");
    })
  }
}
