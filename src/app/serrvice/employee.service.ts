import { Injectable } from '@angular/core';

import {HttpClient}  from '@angular/common/http'
import { Observable } from 'rxjs';
import {  EmployeeInterface } from '../s_model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {



  constructor( private http:HttpClient) { }


// creating server url
  // _url1 = '../assets/data/employee.json'

  _url ='http://localhost:4300/posts'

 

public getEmployees():Observable<EmployeeInterface>
{
 return this.http.get<EmployeeInterface>(this._url) // we need to return why we have received streem of data in bservable so we have to subscribe
}


// public getDepartments():Observable<Department[]>{
//   return this.http.get<Department[]>(" _url1 ")
// }


}
