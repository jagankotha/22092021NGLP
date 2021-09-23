import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-spec-edit',
  templateUrl: './spec-edit.component.html',
  styleUrls: ['./spec-edit.component.css']
})
export class SpecEditComponent implements OnInit {

  constructor(private _http:HttpClient, private _router:ActivatedRoute) { }

  ngOnInit(): void {

  }
  onSubmit(data:any){
    this._http.post("http://localhost:8989/specilization/update",data).subscribe((posRes)=>{
      console.log("data submitted successfully   "+posRes);
    })
   }
}
