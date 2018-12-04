import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public data: any;
  constructor(
    private http: HttpClient
  ) { }

  getAll() {
    return this.http.get(`http://localhost:3000/products`);
  }

  getData() {
     this.getAll().subscribe(res => {
      this.data = res;
    })
  }
}
