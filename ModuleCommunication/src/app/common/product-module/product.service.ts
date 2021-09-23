import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Product from './product.model';
import Acs from './acs.model ';
@Injectable({
  providedIn: 'root',
})
export class productService {
  constructor(private http: HttpClient) {}

  public getAcProducts():Observable<Acs[]>{
      console.log("calling the Acs find all method....");
      return this.http.get<Acs[]>('http://localhost:8989/acs/findAll');
  }
  public getProducts(): Observable<Product[]> {
    console.log('calling the Product find all method....');
    return this.http.get<Product[]>(
      'http://localhost:8989/specilization/findAll'
    );
  }
}
