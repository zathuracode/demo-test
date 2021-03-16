import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../domain/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MTU5MjI2NzEsImlzcyI6Imh0dHBzOi8vemF0aHVyYWNvZGUub3JnIiwic3ViIjoiYWRtaW4iLCJleHAiOjE2MTY3ODY2NzF9.xr-09q7BRdYGuEg1FndUrtD-u0sW_ts7I3KlPAN9qts' })
  };

  API:string='http://localhost/api/v1/';

  constructor(public httpClient:HttpClient) { }

  findAll():Observable<Customer[]>{
    return this.httpClient.get<Customer[]>(`${this.API}customer`,this.httpOptions);
  }

  save(customer:Customer):Observable<any>{
    return this.httpClient.post(`${this.API}customer`,customer,this.httpOptions);
  }

}
