import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spec-create',
  templateUrl: './spec-create.component.html',
  styleUrls: ['./spec-create.component.css'],
})
export class SpecCreateComponent implements OnInit {
  constructor(private _http: HttpClient) {}

  ngOnInit(): void {}
  onSubmit(data: any) {
    this._http
      .post('http://localhost:8989/specilization/create', data)
      .subscribe((posRes) => {
        console.log('data submitted successfully   ' + posRes);
      });
  }
}
