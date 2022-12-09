import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  userRegistration=(dataToSend:any)=>{
    return this.http.post("http://localhost:8080/userregistration",dataToSend)
  }
  userLogin=(dataToSend:any)=>{
    return this.http.post("http://localhost:8080/userlogin",dataToSend)
  }
  getProfile=(dataToSend:any)=>{
    return this.http.post("http://localhost:8080/profileview",dataToSend)
  }
}
