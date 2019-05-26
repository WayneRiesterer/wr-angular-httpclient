import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  // TODO: Add generics so the return type can be set
  getData(url: string): any {
    return this.http.get<any>(url);
  }

}