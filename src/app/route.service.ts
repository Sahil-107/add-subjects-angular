import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { subject } from './data-type';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  constructor(private http:HttpClient) { }
  headers = new HttpHeaders({
    'Content-Type': 'multipart/form-data' // Change the content type here
  });

  requestOptions = {
    headers: this.headers
  };

  addSubjectsroute(data:FormData){
    console.log(data)
    return this.http.post("http://3.109.45.59:8080/adminfunctions/addSubjects", data);
  }
}
