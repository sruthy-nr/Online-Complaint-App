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
  addComplaint=(dataToSend:any)=>{
    return this.http.post("http://localhost:8080/addcomplaint",dataToSend)
  }
  viewAllComplaint=()=>{
    return this.http.get("http://localhost:8080/viewallcomplaint")
  }
  userViewComplaint=(dataToSend:any)=>{
    return this.http.post("http://localhost:8080/userviewcomplaint",dataToSend)
  }
}
