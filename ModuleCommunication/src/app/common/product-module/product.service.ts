import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Product from './product.model';
@Injectable({
  providedIn: 'root',
})
export class productService {
  constructor(private http: HttpClient) {}

  // public getProducts():Observable<Product[]>{
  //     console.log("calling the find all method....");
  //     return this.http.get<Product[]>(`http://localhost:8989/specilization/findAll}`);
  // }
  public getProducts(): Observable<Product[]> {
    console.log('calling the find all method....');
    return this.http.get<Product[]>(
      'http://localhost:8989/specilization/findAll'
    );
  }
}
